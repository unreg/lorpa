
const goToLastComment = () => {
  const article = getTopic();

  if (article) {
    var browser = browser || chrome;

    browser.storage.local.get(['visited_articles'], (stored) => {
      var visited_articles = new Set(stored.visited_articles);

      visited_articles.add(article.id);

      browser.storage.local.get(['visited_details'], (stored) => {
        console.log(stored);
        var { visited_details } = stored;

        if (!visited_details) {
          visited_details = {};
        }

        if (!visited_details[article.id]) {
          visited_details[article.id] = {};
        }

        var { comment } = visited_details[article.id];
        const articles = [...document.querySelectorAll('article.msg')]
          .filter(article => article.id === comment);
        if (articles.length === 1) {
          window.scroll(0, articles[0].offsetTop)
        }

        comment = lastCommentOnPage();
        if (comment) {
          visited_details[article.id] = {
            comment: comment.id,
            datetime: new Date(),
          }
        }

        setTimeout(() => {
          browser.storage.local.set({
            visited_articles: [...visited_articles],
            visited_details,
          });
        }, 3000);
      });
    });
  }
};


const getTopic = () => {
  const articles = [...document.querySelectorAll('article.msg')]
    .filter(article => article.id.indexOf('topic') !== -1 );
  return articles.length === 1 && articles[0];
};


const lastCommentOnPage = () => {
  const articles = [...document.querySelectorAll('article.msg')]
    .filter(article => article.id.indexOf('comment') !== -1);
  return articles.length && articles[articles.length - 1];
};


const buttons = [
  {
    icon: 'chevron-circle-up',
    callback: () => { window.scroll(0, 0); },
  },
  {
    icon: 'list',
    callback: () => { document.location.href = `https://www.linux.org.ru/tracker/`; },
  },
  {
    icon: 'chevron-circle-down',
    callback: () => { window.scroll(0, document.body.scrollHeight); },
  },
]


// Font Awesome 4.7
const fa = document.createElement('link');
fa.rel = 'stylesheet';
fa.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
document.getElementsByTagName('head')[0].appendChild(fa);

const container = document.createElement('div');
container.className = 'lor-panel-container';
document.body.appendChild(container);

const group = document.createElement('ul');
group.className = 'lor-panel-group';
container.appendChild(group);

buttons.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<a><i class="fa fa-${item.icon}" aria-hidden="true"></i></a>`
  li.onclick = item.callback;
  group.appendChild(li);
})


goToLastComment();

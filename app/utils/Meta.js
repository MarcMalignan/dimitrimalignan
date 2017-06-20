import bg from '../../images/background.jpg';

export default {
  updateFacebookMeta() {
    const url = document.getElementById('metaOgUrl');
    const title = document.getElementById('metaOgTitle');
    const desc = document.getElementById('metaOgDesc');
    const img = document.getElementById('metaOgImg');
    const id = document.getElementById('metaFbId');

    const metaDesc = document.getElementById('metaDesc');

    url.content = location.href;
    title.content = document.title;
    desc.content = metaDesc.content;
    img.content = `${location.origin}/${bg}`;
    id.content = '119561851975826';
  },

  updateTwitterMeta() {
    const card = document.getElementById('metaTwCard');
    const site = document.getElementById('metaTwSite');
    const title = document.getElementById('metaTwTitle');
    const desc = document.getElementById('metaTwDesc');
    const img = document.getElementById('metaTwImg');

    const metaDesc = document.getElementById('metaDesc');

    card.content = 'summary';
    site.content = '@DimitriMalignan';
    title.content = document.title;
    desc.content = metaDesc.content;
    img.content = `${location.origin}/${bg}`;
  },
};

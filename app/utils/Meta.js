import bg from '../../images/background.jpg';

export default {
  updateFacebookMeta() {
    const url = document.getElementById('metaOgUrl');
    const title = document.getElementById('metaOgTitle');
    const desc = document.getElementById('metaOgDesc');
    const img = document.getElementById('metaOgImg');

    const metaDesc = document.getElementById('metaDesc');

    url.content = location.href;
    title.content = document.title;
    desc.content = metaDesc.content;
    img.content = `${location.origin}/${bg}`;
  },
};

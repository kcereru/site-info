import { withPluginApi } from 'discourse/lib/plugin-api';
import showModal from 'discourse/lib/show-modal';
import { iconNode } from 'discourse-common/lib/icon-library';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.site_info_enabled && siteSettings.site_info_source_url) {
    api.decorateWidget('header-icons:before', helper => {

      const openModal = function () {
                const controller = showModal('site-info', { title: 'site_info.title' })
      };

      return helper.h('li', [
          helper.h('a#home-button.icon', {
              onclick: openModal,
              title: 'site_info.title'
          }, iconNode('info')),
      ]);
    });
  }
}

export default
{
  name: 'site-info',

  initialize(container)
  {
    withPluginApi('0.8.30', api => initializePlugin(api));
  }
};

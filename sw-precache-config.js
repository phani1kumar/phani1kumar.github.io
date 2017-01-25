
module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/src/*.html',
    '/bower_components/webcomponentsjs/webcomponents-lite.js',
    '/images/phanui/**'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /\/bower_components\/.*/,
      handler: 'networkFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24*10,
          maxEntries: 400,
          name: 'elements-cache'
        }
      }
    },
    {
      urlPattern: /\/src\/.*/,
      handler: 'networkFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24,
          maxEntries: 50,
          name: 'src-elements-cache'
        }
      }
    },    
    {
      urlPattern: /\/data\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24*10,
          maxEntries: 200,
          name: 'data-cache'
        }
      }
    },
    {
      urlPattern: /\/images\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24*10,
          maxEntries: 200,
          name: 'images-cache'
        }
      }
    }
  ]
};
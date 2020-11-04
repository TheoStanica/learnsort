const inputController = () => {
  const inputFields = document.querySelectorAll('.formInput');
  inputFields.forEach((inputField) => {
    inputField.addEventListener('focus', () => {
      const value = inputField.parentElement.getAttribute('data-content');
      if (inputField.value) {
        setTimeout(() => {
          inputField.parentElement.setAttribute('data-value', value);
        }, 700);
      }
    });
    inputField.addEventListener('focusout', () => {
      const value = inputField.parentElement.getAttribute('data-content');
      if (inputField.value) {
        setTimeout(() => {
          inputField.parentElement.setAttribute('data-value', '');
        }, 700);
      }
    });
  });
};

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([23.835052, 44.30853]),
    zoom: 16,
  }),
});

inputController();

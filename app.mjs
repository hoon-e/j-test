import { routes, places, placesForRoute, drivingLoop, mapSearch, checkedDate } from './data.mjs?v=20261011-b';

const icons = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  car: '<path d="m5 11 2-5h10l2 5M3 11h18v6H3zM6 17v2m12-2v2M7 14h1m8 0h1"/>',
  moon: '<path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z"/>',
  home: '<path d="M4 11 12 4l8 7M6 9v11h12V9"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
const categoryLabels = { sights: '볼거리', food: '먹거리', gyms: '헬스장' };
const placeById = new Map(places.map(place => [place.id, place]));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let route = routes.find(item => item.id === new URLSearchParams(location.search).get('route')) || routes[0];
let category = 'all';

// The first three named sights of a route, in itinerary order.
const highlights = item => item.days.flatMap(day => day.stops).map(stop => placeById.get(stop.place)).filter(place => place?.category === 'sights').slice(0, 3).map(place => place.name);

function renderPicker() {
  document.querySelector('#route-options').innerHTML = routes.map(item => {
    const selected = item.id === route.id;
    return `<button class="route-card${selected ? ' selected' : ''}" data-route="${item.id}" aria-pressed="${selected}">
      <span class="route-image"><img src="./assets/${item.image}.webp" alt="" width="1600" height="1067">${selected ? `<span class="route-check">${icon('check')} 선택함</span>` : ''}</span>
      <span class="route-card-body"><strong>${item.name}</strong><span class="route-mood">${item.mood}</span><span class="route-drive">${icon('car')} 첫날 ${item.firstDrive}</span></span>
    </button>`;
  }).join('');
}

function renderPlan() {
  document.querySelector('#plan-head').innerHTML = `
    <img class="plan-photo" src="./assets/${route.image}.webp" alt="${route.imageAlt}" width="1600" height="1067">
    <div class="plan-copy">
      <h2 id="plan-title">${route.name}</h2>
      <p class="plan-description">${route.description}</p>
      <p class="plan-highlights">${highlights(route).map(name => `<span>${name}</span>`).join('')}</p>
      <dl class="plan-facts">
        <div><dt>${icon('moon')} 숙박</dt><dd>${route.nights.map((night, index) => `<span>${index + 1}박 ${night}</span>`).join('')}</dd></div>
        <div><dt>${icon('car')} 이동</dt><dd>${route.tip}</dd></div>
      </dl>
      <a class="button" href="${drivingLoop(route)}" target="_blank" rel="noopener noreferrer">구글 지도로 전체 경로 보기 ${icon('arrow')}</a>
    </div>`;
  document.querySelector('#days').innerHTML = route.days.map((day, index) => `
    <li class="day">
      <div class="day-top"><span class="day-number">${index + 1}일차</span><span class="day-location">${day.location}</span></div>
      <h3>${day.title}</h3>
      <span class="day-drive">${icon('car')} ${day.drive}</span>
      <ol class="stops">${day.stops.map(stop => {
        const place = placeById.get(stop.place);
        const name = place ? `<a href="${mapSearch(place.mapQuery)}" target="_blank" rel="noopener noreferrer">${place.name} ${icon('arrow')}</a>` : stop.name;
        return `<li><span class="stop-time">${stop.time}</span><div><h4>${name}</h4><p>${stop.text}</p></div></li>`;
      }).join('')}</ol>
      <p class="day-stay">${icon(index === 2 ? 'home' : 'moon')} ${day.sleep}</p>
    </li>`).join('');
}

function renderPlaces() {
  const available = placesForRoute(route.id);
  const order = Object.keys(categoryLabels);
  const visible = available.filter(place => category === 'all' || place.category === category).sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
  const count = key => available.filter(place => key === 'all' || place.category === key).length;
  document.querySelector('#places-subtitle').textContent = `${route.name} 코스에서 들르기 좋은 곳입니다. 이름을 누르면 공식 안내로 이동합니다.`;
  document.querySelector('#filters').innerHTML = ['all', 'sights', 'food', 'gyms'].map(key => `<button class="filter" data-category="${key}" aria-pressed="${key === category}">${key === 'all' ? '전체' : categoryLabels[key]} <span>${count(key)}</span></button>`).join('');
  document.querySelector('#place-list').innerHTML = visible.map(place => `
    <article class="place-card">
      <div class="place-body">
        <span class="category-label ${place.category}">${categoryLabels[place.category]}</span>
        <h3><a href="${place.source}" target="_blank" rel="noopener noreferrer">${place.name}</a></h3>
        <span class="place-area">${icon('pin')} ${place.area}</span>
        <p>${place.description}</p>
        <p class="place-note">${place.note}${place.accessSource ? ` <a href="${place.accessSource}" target="_blank" rel="noopener noreferrer">이용·주차 안내</a>` : ''}</p>
        <div class="place-links"><a href="${place.source}" target="_blank" rel="noopener noreferrer">공식 안내 ${icon('arrow')}</a><a href="${mapSearch(place.mapQuery)}" target="_blank" rel="noopener noreferrer">지도 ${icon('arrow')}</a></div>
      </div>
    </article>`).join('');
}

function renderAll() {
  renderPicker();
  renderPlan();
  renderPlaces();
}

document.querySelector('#route-options').addEventListener('click', event => {
  const button = event.target.closest('[data-route]');
  if (!button || button.dataset.route === route.id) return;
  route = routes.find(item => item.id === button.dataset.route);
  category = 'all';
  const url = new URL(location.href);
  url.searchParams.set('route', route.id);
  history.replaceState(null, '', url);
  renderAll();
  document.querySelector('#plan').classList.remove('arrive');
  void document.querySelector('#plan').offsetWidth;
  document.querySelector('#plan').classList.add('arrive');
  document.querySelector(`[data-route="${route.id}"]`).focus({ preventScroll: true });
  document.querySelector('#plan').scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth' });
  document.querySelector('#results-status').textContent = `${route.name} 코스의 3일 일정을 표시합니다.`;
});

document.querySelector('#filters').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  category = button.dataset.category;
  renderPlaces();
  document.querySelector(`[data-category="${category}"]`).focus();
});

document.querySelector('#checked-date').textContent = checkedDate;
renderAll();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    margin: 10,
    loop: true,
    navText: [
      `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.06489 19.6453L0.558407 10.767C0.372473 10.5346 0.233022 10.2557 0.233022 9.97676C0.233022 9.69786 0.372473 9.41896 0.558407 9.23302L9.06489 0.354666C9.48325 -0.11017 10.227 -0.11017 10.6453 0.308182C11.1102 0.726534 11.1102 1.42379 10.6918 1.88862L2.88258 10.0232L10.6918 18.1114C11.1102 18.5297 11.1102 19.2735 10.6453 19.6918C10.227 20.1102 9.48325 20.1102 9.06489 19.6453Z" fill="white"/>
</svg>
`,
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.93511 2.35467L17.4416 11.233C17.6275 11.4654 17.767 11.7443 17.767 12.0232C17.767 12.3021 17.6275 12.581 17.4416 12.767L8.93511 21.6453C8.51675 22.1102 7.77302 22.1102 7.35467 21.6918C6.88983 21.2735 6.88983 20.5762 7.30818 20.1114L15.1174 11.9768L7.30818 3.88862C6.88983 3.47027 6.88983 2.72653 7.35467 2.30818C7.77302 1.88983 8.51675 1.88983 8.93511 2.35467Z" fill="white"/>
</svg>
`,
    ],
  });
});

export function scrollTo(elementId) {
  const offset = document.getElementById(elementId)?.offsetTop || 0
  window.scrollTo({
    top:      offset,
    left:     0,
    behavior: 'smooth',
  })
}

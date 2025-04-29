export function closeMenu() {
  document.getElementById('vNavegator').style.display = 'none'
  document.getElementById('showNavegator').style.display = 'inline-block'
}
export function showMenu() {
  document.getElementById('vNavegator').style.display = 'inline-block'
  document.getElementById('showNavegator').style.display = 'none'
}
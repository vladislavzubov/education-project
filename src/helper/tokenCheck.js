export default function tokenCheck() {
  if (localStorage.getItem('accessKey') === undefined) {
    return false;
  }

  return true;
}

export default function scrolling(ref) {
  setTimeout(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - ref.current.clientHeight - 100;
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  }, 500);
}

export const getTime = () => {
  const date = new Date().toLocaleDateString().split('/');
  const a = new Date().toLocaleTimeString().slice(0, 2) === '下午' ? 'PM' : 'AM';
  const h = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
  const m = new Date().getMinutes();
  
  date.push(date.shift());

  return {
    date: date.join('/'),
    time: `${h}:${m} ${a}`
  }
}

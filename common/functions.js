export const renderDays = (month) => {
  if (!month) return;
  const temp = [];
  var date = new Date();

  const days = new Date(date.getFullYear(), month, 0).getDate();
  for (let i = 1; i <= parseInt(days); i++) {
    temp.push(i);
  }

  var firstDay = new Date(date.getFullYear(), parseInt(month) - 1, 1).getDay();

  for (let j = 1; j < firstDay; j++) {
    temp.unshift('');
  }

  return temp;
};

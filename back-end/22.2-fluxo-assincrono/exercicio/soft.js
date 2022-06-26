function boleto(data, quantParcelas) {
  const date = new Date(data);

  const diaDoMes = date.getUTCDate(); 
  const mesInicial = date.getMonth(); // entre 0 - 11
  const year = date.getFullYear();

  // console.log(new Date(year, mesinicial, diaDoMes));

  for(let i = 1; i <= quantParcelas; ++i) {
    const mes = mesInicial + i;
    const nextDate = new Date(year, mes, diaDoMes);
    const nextDay = nextDate.getUTCDate();
    const nextMonth = nextDate.getMonth(); // entre 0 - 11
    const nextYear = nextDate.getFullYear();
    const weekDay = nextDate.getDay(); // entre 0 - 6

    console.log(weekDay);

    switch (weekDay) {
      case 6:
        console.log(`Parcela ${i}: ${new Date(nextYear, nextMonth, nextDay + 2)}`);
        break;
      case 0:
        console.log(`Parcela ${i}: ${new Date(nextYear, nextMonth, nextDay + 1)}`);
        break;
      default:
        console.log(`Parcela ${i}: ${new Date(nextYear, nextMonth, nextDay)}`);
    }
  }
}


boleto('2022-07-02', 6);

export function generateDate(timestamp) {
    return timestamp?.split('T')[0];
}

export function generateTime(timestamp) {
    let fullTime = timestamp?.split('T')[1];
    let indx = fullTime?.lastIndexOf(':');
    let charAt = fullTime?.charAt(indx);
    let hours = fullTime?.split(charAt)[0];
    let ments = fullTime?.split(charAt)[1];
    return `${hours}:${ments}${hours > 12 ? ' pm' : ' am'}`;
}

export function translateState(state) {
    switch (state) {
        case 'TICKET_CREATED':
            return 'تم انشاء الشحنة'
        case 'PACKAGE_RECEIVED':
            return 'تم استلام الشحنه من التاجر'
        case 'IN_TRANSIT':
            return 'في مرحلة انتقالية'
        case 'NOT_YET_SHIPPED':
            return 'لم يتم شحنه بعد'
        case 'OUT_FOR_DELIVERY':
            return 'الشحنة خرجت للتسليم'
        case 'DELIVERED':
            return 'تم تسليم الشحنة'
        case 'RECEIVED_DELIVERY_LOCATION':
            return 'تم استلام موقع تسليم الشحنة'
        case 'WAITING_FOR_CUSTOMER_ACTION':
            return 'في انتظار رد العميل'
        case 'DELIVERED_TO_SENDER':
            return 'تم تسليم الشحنة للمسلم اليه'

    }
}

export function translateHup(hup) {
    switch (hup) {
        case 'Bosta HQ':
            return 'الفرع الرئيسي'
        case 'Katamya Hub':
            return 'القطامية'
        case 'Tanta Hub':
            return 'طنطا'
        case 'Mohandseen Hub':
            return 'المهندسين'
        case 'Alexandria Hub':
            return ' الإسكندرية'
    }
}

export const getRecevingDate = (timestamp) => {
    let date = generateDate(timestamp)?.split('-');
    let months = [
        '',
        'يناير',
        'فبراير',
        'مارس',
        'ابريل',
        'مايو',
        'يونيو',
        'يوليو',
        'اغسطس',
        'سبتمبر',
        'اكتوبر',
        'نوفمبر',
        'ديسمبر',
    ];
    let receivingDate = date &&`${date[0]} - ${date[2]} - ${months[+date[1]]}`

    return receivingDate;
};


export const getLastUpdate = (timestamp) => {
    let date = generateDate(timestamp);
    let days = [
      'السبت',
      'الاحد',
      'الاثنين',
      'الثلاثاء',
      'الاربعاء',
      'الخميس',
      'الجمعه',
    ];
    let formatStr = `at ${generateTime(timestamp)} ${date?.replaceAll('-','/')} ${days[new Date(date).getDay()]}`;
    return formatStr;
  };


export const getLastState = (state)=>{
    return translateState(state);
}




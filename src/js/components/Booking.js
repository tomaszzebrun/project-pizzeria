import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import utils from '../utils.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(element) {
    const thisBooking = this;
    thisBooking.peopleAmount = 1;
    thisBooking.hoursAmount = 1;
    thisBooking.render(element);
    thisBooking.initWidgets();
  }
  render(element){
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.appendChild(utils.createDOMFromHTML(generatedHTML));
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
  }
  initWidgets(){
    const thisBooking = this;
    thisBooking.peopleAmountWidgetElem = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.peopleAmountWidgetElem.setValue(thisBooking.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function(){

    });
    thisBooking.hoursAmountWidgetElem = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.hoursAmountWidgetElem.setValue(thisBooking.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('updated', function(){

    });
    thisBooking.datePickerWidgetElem = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.dom.datePicker.addEventListener('updated', function(){

    });
    thisBooking.hourPickerWidgetElem = new HourPicker(thisBooking.dom.hourPicker);
    thisBooking.dom.hourPicker.addEventListener('updated', function(){

    });
  }
}

export default Booking;
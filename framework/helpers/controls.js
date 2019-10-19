/**
 * @external {TestController} https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#test-controller
 * @filesource: control.js
 *
 * Per aiutare la generazione automatica 
 * dell'impalcatura dei test, i nomi delle classi 
 * saranno in linea con i tipi campo gestiti dal
 * codice ColdFusion.
 *
 * text
 * combo
 * selectanag
 * date
 * checkbox
 * numeric
 * hidden
 * 
 * N.B.:
 * attenzione a selectgeraSL, selectgeraLili
 *
 *
 */
import { Selector } from 'testcafe';
const moment = require('moment');

const path = require('path');
var whoami = path.basename(__filename);
var {logger,tracer,setLoggerBehaviour,getLoggerConfig} = require('@root/framework/common/ta-logger.js');
setLoggerBehaviour(tracer,whoami);
var loggerConf = getLoggerConfig(tracer,whoami);

/* IMPORTANT: this must be done at least once before using any require() alias */
require('module-alias/register');


/**
 * Le classi wrapper dei controlli devono sempre esporre i metodi :
 *
 * async set(t,value)
 * async check(t,expected)
 * async clear(t)
 *
 * (t : TestCafe object)
 *
 * e prendere in input da costruttore le informazioni che servono
 * per identificarle (normalmente l'id)
 */


/**
 * Classe wrapper text
 *
 */
export class text {

  /**
   * @constructor
   * @param {string} id The html id of the text component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.typeText(this.selector, value.toString(), { replace : true});
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.value).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}

/**
 * Classe wrapper numeric
 *
 */
export class numeric {

  /**
   * @constructor
   * @param {string} id The html id of the numeric component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.typeText(this.selector, value.toString(), { replace : true});
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.value).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}

/**
 * Classe wrapper hidden
 *
 */
export class hidden {

  /**
   * @constructor
   * @param {string} id The html id of the hidden component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.typeText(this.selector, value.toString(), { replace : true});
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.value).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}

/**
 * Classe wrapper time
 *
 */
export class time {

  /**
   * @constructor
   * @param {string} id The html id of the time component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.typeText(this.selector, value.toString(), { replace : true});
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.value).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}

/**
 * Classe wrapper password
 *
 */
export class password {

  /**
   * @constructor
   * @param {string} id The html id of the password component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.typeText(this.selector, value.toString(), { replace : true});
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.value).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}


/**
 * Classe wrapper date
 *
 */
export class date {

  /**
   * @constructor
   * @param {string} id The html id of the date component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets a new moment date in the date control
   * @param {TestController} t TestController
   * @param {Date} date The moment to set in the date control
   */
  async set(t, date) {
    const dateFormat = await this.selector.getAttribute('data-date-format');
    
    var dateAsString = date;
    if( typeof date != 'string' ) {
      // is a date
      dateAsString = moment(date).format(dateFormat);
    }
    await t.typeText(this.selector, dateAsString, {replace : true});
  }

  /**
   * Checks if the control holds the expected date
   * @param {TestController} t TestController
   * @param {Date} expectedDate The expected date that the date control should contain
   */
  async check(t, expectedDate) {
    const dateFormat = await this.selector.getAttribute('data-date-format');
    await t.expect(this.selector.value).eql(moment(expectedDate).format(dateFormat));
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}

/**
 * Classe wrapper selectanag
 *
 */
export class selectanag {
  
  /**
   * @constructor
   * @param {string} id Id name of the selectanag component, must be provided only the name without prefix or suffix or '#'
   */
  constructor(id) {
    const $_f = 'constructor.selectanag';
    const currentLogLevel = tracer.getLevel();

    if( loggerConf.do.indexOf($_f) >= 0 ) {
      tracer.setLevel({level:'info'})
    }

    this.id = id;
    this.htmlID = this.id;
    this.prefix = 'select2-';
    this.suffix = '-container';
    this.containerOpen = '.select2-container--open';
    this.selectionClear = '.select2-selection__clear';
    this.searchField = '.select2-search__field';

    if( -1 == id.search(this.prefix) ) {
      this.htmlID = '#' + this.prefix + this.id + this.suffix;      
    }

    this.selector = Selector(this.htmlID);

    tracer.setLevel(currentLogLevel);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    const $_f = 'set.selectanag';
    const currentLogLevel = tracer.getLevel();
    if( loggerConf.do.indexOf($_f) >= 0 ) {
      tracer.setLevel({level:'info'})
    }

    logger.info($_f,'start-selectanag');
    logger.info($_f,'this.htmlID:', this.htmlID);
    logger.info($_f,'this.searchField:', this.searchField);

    // want to access the original standard HTML Select element
    // that was transformed in a richer widget by some JS framework.
    var plainSelectID = this.id;

    // need to adapt selector to testcafe / jQuery way
    // # => for ID
    if( -1 == plainSelectID.search('#') ) {
      plainSelectID = '#' + plainSelectID;      
    }

    var millisecDelay = 0;
    if( await Selector(plainSelectID).hasAttribute('data-ajax--url') ) {
      millisecDelay = 600;
    }
    logger.info($_f,'plainSelectID:', plainSelectID);
    logger.info($_f,'millisecDelay:', millisecDelay);

    // CRITIC:
    // All need to be ONE instruction, because the enter key
    // has to sent to the right widget.
    await t.click(this.selector)
           .typeText(Selector(this.searchField), value.toString())
           .wait(millisecDelay)
           .pressKey('enter');

    tracer.setLevel(currentLogLevel);
  }

  /**
   * Checks if the control hold the expected value or if the given regexp 
   * matches the value the control holds
   * @param {TestController} t TestController
   * @param {(any|RegExp)} expectedValOrRegex The expected value or RegExp
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.innerText, expectedValOrRegex);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    const btnClear = this.selector.find(this.selectionClear);
    if(await btnClear.exists) {
      await t.click(btnClear);
    }
  }
}

/**
 * Classe wrapper combo
 *
 */
export class combo {
  
  /**
   * @constructor
   * @param {string} id Id name of the combo component, must be provided only the name without prefix or suffix or '#'
   */
  constructor(id) {
    const $_f = 'constructor.combo';
    const currentLogLevel = tracer.getLevel();
    if( loggerConf.do.indexOf($_f) >= 0 ) {
      tracer.setLevel({level:'info'})
    }
 
    logger.info($_f,'start-combo');

    this.id = id;
    this.htmlID = this.id;
    this.prefix = 'select2-';
    this.suffix = '-container';
    this.containerOpen = '.select2-container--open';
    this.selectionClear = '.select2-selection__clear';
    this.searchField = '.select2-search__field';


    if( -1 == this.id.search(this.prefix) ) {
      this.htmlID = '#' + this.prefix + this.id + this.suffix;      
    }

    this.selector = Selector(this.htmlID);

    tracer.setLevel(currentLogLevel);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    const $_f = 'set.combo';
    const currentLogLevel = tracer.getLevel();
    if( loggerConf.do.indexOf($_f) >= 0 ) {
      tracer.setLevel({level:'info'})
    }
 
    logger.info($_f,'start-combo');
    logger.info($_f,'this.htmlID:', this.htmlID);
    logger.info($_f,'this.searchField:', this.searchField);

    await t.click(this.selector)
           .typeText(Selector(this.searchField), value.toString())
           .pressKey('enter');

    tracer.setLevel(currentLogLevel);
  }

  /**
   * Checks if the control hold the expected value or if the given regexp 
   * matches the value the control holds
   * @param {TestController} t TestController
   * @param {(any|RegExp)} expectedValOrRegex The expected value or RegExp
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.innerText, expectedValOrRegex);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    const btnClear = this.selector.find(this.selectionClear);
    if(await btnClear.exists) {
      await t.click(btnClear);
    }
  }
}


/**
 * Classe wrapper per il campo di tipo checkbox
 *
 */
export class checkbox {

  /**
   * @constructor
   * @param {string} id The html id of the checkbox component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    if(await this.selector.checked != value){
       await t.click(this.selector);
    }
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.checked).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    if(await this.selector.checked == true){
          await t.click(this.selector);
    }
  }
}


/**
 * Classe wrapper per il campo di tipo text
 *
 */
export class InputText {

  /**
   * @constructor
   * @param {string} id The html id of the InputText component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.typeText(this.selector, value.toString(), { replace : true});
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.value).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}




/**
 * Classe wrapper per i campi di tipo data
 *
 */
export class DatePicker {

  /**
   * @constructor
   * @param {string} id The html id of the DatePicker component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets a new moment date in the date control
   * @param {TestController} t TestController
   * @param {Date} date The moment to set in the DatePicker control
   */
  async set(t, date) {
    const dateFormat = await this.selector.getAttribute('data-date-format');
    await t.typeText(this.selector, moment(date).format(dateFormat), {replace : true});
  }

  /**
   * Checks if the control holds the expected date
   * @param {TestController} t TestController
   * @param {Date} expectedDate The expected date that the DatePicker control should contain
   */
  async check(t, expectedDate) {
    const dateFormat = await this.selector.getAttribute('data-date-format');
    await t.expect(this.selector.value).eql(moment(expectedDate).format(dateFormat));
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    await t.selectText(this.selector).pressKey('delete')
  }
}


/**
 * Helper function utilizzata da Select2
 * che verifica se actual == expected, ma
 * nel caso expected sia una Regex verra' testato il match 
 */
async function eqlOrMatch(t, actual, expected){
    if(expected instanceof RegExp){
        await t.expect(actual).match(expected);
    }else{
        await t.expect(actual).eql(expected);
    }
}


/**
 * Classe wrapper per i campi di tipo Select2
 *
 */
export class Select2 {
  
  /**
   * @constructor
   * @param {string} id Id name of the select2 component, must be provided only the name without prefix or suffix or '#'
   */
  constructor(id) {
    const $_f = 'constructor.Select2';
    const currentLogLevel = tracer.getLevel();
    if( loggerConf.do.indexOf($_f) >= 0 ) {
      tracer.setLevel({level:'info'})
    }
 
    var identifier = id;

    logger.info($_f,'start-Select2');
    logger.info($_f,'identifier:', identifier);

    
    this.prefix = 'select2-';
    this.suffix = '-container';
    this.containerOpen = '.select2-container--open';
    this.selectionClear = '.select2-selection__clear';
    this.dropdown = '.select2-search.select2-search--dropdown';
    this.searchField = '.select2-search__field';

    this.htmlID = id;
    if( -1 == id.search(this.prefix) ) {
      this.htmlID = '#' + this.prefix + id + this.suffix;      
    }
    this.selector = Selector(this.htmlID);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    const $_f = 'set.Select2';
    const currentLogLevel = tracer.getLevel();
    if( loggerConf.do.indexOf($_f) >= 0 ) {
      tracer.setLevel({level:'info'})
    }

    logger.info($_f,'start-Select2');
    logger.info($_f,'this.htmlID:', this.htmlID);
    logger.info($_f,'this.dropdown:', this.dropdown);
    logger.info($_f,'this.searchField:', this.searchField);

    await t.click(this.selector)
           .typeText(Selector(this.dropdown).find(this.searchField), value.toString())
           .pressKey('enter');
    tracer.setLevel(7);
  }

  /**
   * Checks if the control hold the expected value or if the given regexp 
   * matches the value the control holds
   * @param {TestController} t TestController
   * @param {(any|RegExp)} expectedValOrRegex The expected value or RegExp
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.innerText, expectedValOrRegex);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    const btnClear = this.selector.find(this.selectionClear);
    if(await btnClear.exists) {
      await t.click(btnClear);
    }
  }
}


/**
 * Classe wrapper per il campo di tipo checkbox
 *
 */
export class Checkbox {

  /**
   * @constructor
   * @param {string} id The html id of the Checkbox component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    if(await this.selector.checked != value){
      await t.click(this.selector);
    }
  }

  /**
   * Checks if the control holds the expected value
   * @param {TestController} t TestController
   * @param {*} expected Expected value
   */
  async check(t, expected) {
    await t.expect(this.selector.checked).eql(expected);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    if(await this.selector.checked == true){
      await t.click(this.selector);
    }
  }
}

/**
 * Classe wrapper per il campo di tipo selectComposed
 *
 */
export class SelectComposed {
  
  /**
   * @constructor
   * @param {string} id Id name of the selectcomposed component, must be provided only the name without prefix or suffix or '#'
   */
  constructor(id) {

    var identifier = id;
    
    this.prefix = 'selectgera-';
    this.suffix = '-text';
    this.containerOpen = '.selectgera';

    if( -1 == id.search(this.prefix) ) {
      identifier = '#' + this.prefix + id + this.suffix;      
    }

    this.htmlID = identifier;
    this.selector = Selector(identifier);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    const keys = Object.keys(value);
    let clickPromise = t.click(this.selector);
    for(const key of keys) {
      clickPromise = clickPromise.click(Selector('li').withText(value[key]));
    }
    await clickPromise;
  }

  /**
   * Checks if the control hold the expected value or if the given regexp 
   * matches the value the control holds
   * @param {TestController} t TestController
   * @param {(any|RegExp)} expectedValOrRegex The expected value or RegExp
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.value, expectedValOrRegex);
  }

  /**
   * Resets the control
   * @param {TestController} t TestController
   */
  async clear(t) {
    const btnClear = this.selector.find(this.selectionClear);
    if(await btnClear.exists) {
      await t.click(btnClear);
    }
  }
}

/**
 * Classe wrapper per l'upload
 *
 */
export class fileUpload {

  /**
   * @constructor
   * @param {string} id The html id of the fileUpload component
   */
  constructor(id) {
    // it takes the path of the launch directory and then adds the uploads dir
    var p = process.cwd();
    var res = p.split('end-to-end');
    this.path2allegati = res[0] + "end-to-end/uploads/";
    
    this.htmlID = id;
    this.selector = Selector(id);
  }

  // value needs to be an array, even if it contain one only element
  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    if(await Selector('#FileUpload').exists == true){
      await t.click(Selector('#FileUpload'));
    } else if (await Selector('#fileupload').exists == true){
      await t.click(Selector('#fileupload'));
    }

    for(let idx=0;idx<value.length;idx++){
      await t.setFilesToUpload(this.selector, this.path2allegati+value[idx]);
    }
  }
}

/**
 * Classe wrapper per i campi di tipo Select2
 *
 */
export class select {
  
  /**
   * @constructor
   * @param {string} id The html id of the select component
   */
  constructor(id) {
    this.htmlID = id;
    this.selector = Selector(id);
  }

  /**
   * Sets the given value in the control
   * @param {TestController} t TestController
   * @param {*} value The value to set
   */
  async set(t, value) {
    await t.click(this.selector)
           .click(Selector('option').withText(value.toString()));
  }

  /**
   * Checks if the control hold the expected value or if the given regexp 
   * matches the value the control holds
   * @param {TestController} t TestController
   * @param {(any|RegExp)} expectedValOrRegex The expected value or RegExp
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.innerText, expectedValOrRegex);
  }
}

/**
 * Classe wrapper per a selectgera che va gestita come
 * una span al livello TOP e dopo elementi LI (per quello SL) 
 *
 */
export class selectgeraSL {
  
  /**
   * @constructor
   * @param {string} id Id name of the component, 
   *                 must be provided only the name without 
   *                 prefix or suffix or '#'
   */
  constructor(id) {

    var identifier = id;
    
    this.prefix = 'selectgera-';
    this.suffix = '-text';
    this.containerOpen = '.selectgera';

    if( -1 == id.search(this.prefix) ) {
      identifier = '#' + this.prefix + id + this.suffix;      
    }

    this.htmlID = identifier;
    this.selector = Selector(identifier);
  }

  /**
   *
   * @param {array} value each element is a level in the hierarchy
   *                example ['Marketing','Eventi]
   */
  async set(t, value) {
    await t.expect(Array.isArray(value)).eql(true,'value is not array!');

    await t.click(this.selector);
    
    console.log('value');
    console.log(value);
    console.log(value.length);

    var etry = ['li','span'];
    for( var step=0; step < value.length; step++ ) {

      var target = 'span';
      if( step == 0 ) {
        target = 'li';
      } 
      var dwarf = Selector(target).withText(value[step]);
      if( await dwarf.exists ) {
        await t.click(dwarf);
      }

      /*
      for(var edx=0; edx < etry.length; edx++) {
        var target = etry[edx];
        var dwarf = Selector(target).withText(value[step]);
        if( await dwarf.exists ) {
          console.log('exists '+target + ' for ' + value[step]);
          await t.click(dwarf);
          break;
        }
      }
      */

      //await t.click(Selector(target).withText(value[step]));

      /*
      for(var edx=0; edx < etry.length; edx++) {
        console.log(etry);

        var target = etry[edx];
        console.log(target);
        console.log(value[step]);
        
        var dwarf = Selector(target).withText(value[step]);
        if( await dwarf.exits ) {
          console.log('DWARFS exists!!');
          await t.click(dwarf);
        }
      } 
      */
      
      /*
      var dwarf = Selector(target).withText(value[step]);
      if( await dwarf.exits ) {
        await t.click(dwarf);
      }
      await t.click(Selector(target).withText(value[step]));
      */
    }
  }

  /**
   *
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.value, expectedValOrRegex);
  }

  /**
   *
   */
  async clear(t) {
    const btnClear = this.selector.find(this.selectionClear);
    if(await btnClear.exists) {
      await t.click(btnClear);
    }
  }
}

/**
 * Classe wrapper per a selectgera che va gestita come
 * N elementi LI (per quello Lili) 
 *
 */
export class selectgeraLili {
  
  /**
   * @constructor
   * @param {string} id Id name of the component, 
   *                 must be provided only the name without 
   *                 prefix or suffix or '#'
   */
  constructor(id) {

    var identifier = id;
    
    this.prefix = 'selectgera-';
    this.suffix = '-text';
    this.containerOpen = '.selectgera';

    if( -1 == id.search(this.prefix) ) {
      identifier = '#' + this.prefix + id + this.suffix;      
    }

    this.htmlID = identifier;
    this.selector = Selector(identifier);
  }

  /**
   *
   * @param {array} value each element is a level in the hierarchy
   *                example ['Marketing','Eventi]
   */
  async set(t, value) {
    await t.expect(Array.isArray(value)).eql(true,'value is not array!');

    await t.click(this.selector);
    for( var step=0; step < value.length; step++ ) {
      await t.click(Selector('li').withText(value[step]));
    }
  }

  /**
   *
   */
  async check(t, expectedValOrRegex) {
    // IMPORTANT : we use innerText instead of textContent because the latter includes 
    //             even what's hidden by CSS (e.g. the "x" for clearing the selection)
    await eqlOrMatch(t, this.selector.value, expectedValOrRegex);
  }

  /**
   *
   */
  async clear(t) {
    const btnClear = this.selector.find(this.selectionClear);
    if(await btnClear.exists) {
      await t.click(btnClear);
    }
  }
}
// Default value:
function loggerDefaultValue(log){
    if(typeof log === 'undefined'){
      log = 'Gia tri mac dinh';
    }
    console.log(log);
  }
  
  function loggerDefaultValueES6(log = 'Gia tri mac dinh'){
    console.log(log);
  }
  loggerDefaultValueES6(undefined);
  loggerDefaultValueES6();
  loggerDefaultValueES6('Message');
  
  function loggerDefaultOption(log, type = 'log'){
    console[type](log);
  }
  loggerDefaultOption('Message', 'error');
  
  
  
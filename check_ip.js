const url = 'https://am.i.mullvad.net/json';

import('node-fetch').then(({default: fetch}) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data['mullvad_exit_ip'] === false){
          console.log("mullvad vpn ip check: not connected");
          throw "error: not mullvad ip";
      }else{
        console.log("mullvad vpn ip check: connected");
      }
  })
    .catch(error => {
      throw new Error(error);
  });
});
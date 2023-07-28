//javascript toggle

function toggle(id, link) {
      var e = document.getElementById(id);
     
      if (e.style.display == '') {
        e.style.display = 'none';
	link.innerHTML = '+Abstract';
	}
      else {
        e.style.display = '';
	link.innerHTML = '-Abstract';
	}
    }


var arrayList = [1,2,'aasf','1','123',123];

function filter_list(l) {
    var array = [];
    for (var i=0; i<l.length; i++) {
      if (typeof(l[i]) === 'number') {
        array.push(l[i]);
      } else {
        continue;
      }
    }
    return array;
  }

  console.log(filter_list(arrayList));
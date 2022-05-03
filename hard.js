
var info = function() {
    let pii = {
        name: 'John Script',
        ssn: '456-78-9012',
        getName: function() {
            return this.name
        }
    }
    console.log(pii.getName());
}

info();
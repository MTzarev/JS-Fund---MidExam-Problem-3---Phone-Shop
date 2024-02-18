function phoneShop(array) {
    let phones = array.shift().split(', ');

    for (let command of array) {
        let splitCommand = command.split(' - ');
        let action = splitCommand[0];
        let parameters = splitCommand.slice(1);

        if (action === 'Add') {
            let phone = parameters[0];
            if (!phones.includes(phone)) {
                phones.push(phone);
            }
        } else if (action === 'Remove') {
            let phone = parameters[0];
            phones = phones.filter(p => p !== phone);
        } else if (action === 'Bonus phone') {
            let newParameters = parameters[0].split(':');
            let oldPhone = newParameters[0];
            let newPhone = newParameters[1];
            let index = phones.indexOf(oldPhone);
            if (index !== -1) {
                phones.splice(index + 1, 0, newPhone);
            }
        } else if (action === 'Last') {
            let phone = parameters[0];
            let index = phones.indexOf(phone);
            if (index !== -1) {
                phones.splice(index, 1);
                phones.push(phone);
            }
        } else if (action === 'End') {
            break;
        }
    }

    console.log(phones.join(', '));
}

// Example usage:
phoneShop([
    'SamsungA50, MotorolaG5, IphoneSE',
    'Add - Iphone 10',
    'Remove - IphoneSE',
    'End'
]);
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])



calculateM = () =>{

    // Mass and Mass Error
    let massField = document.querySelector('#mass').value;
    let massFieldError = document.querySelector('#mass-error');
    let massUnit = document.querySelector('#mass-unit').value;
    const massDefault = 12;

    // Concentration and Concentration Error
    let concentrationField = document.querySelector('#concentration').value;
    let concentrationError = document.querySelector('#concentration-error');
    let concentrationUnit = document.querySelector('#concentration-unit').value;
    const concentrationDefault = 12;

    // Volume and Volume Error
    let volumeField = document.querySelector('#volume').value;
    let volumeError = document.querySelector('#volume-error');
    let volumeUnit = document.querySelector('#volume-unit').value;
    const volumeDefault = 6;

    // Molecular Weight and Molecular Weight Error
    let mwField = document.querySelector('#mw').value;
    let mwError = document.querySelector('#mw-error');

    let emptyFields = 0;

    // Check if all fields are filled
    if (massField === ''){
        // massFieldError.innerHTML = 'Please enter a Mass';
        emptyFields ++;
    }
        
    if (concentrationField === ''){
        // concentrationError.innerHTML = 'Please enter a Concentration';
        emptyFields ++;
    }

    if (volumeField === ''){
        // volumeError.innerHTML = 'Please enter a Volume';
        emptyFields ++;
    }

    if (mwField === ''){
        // mwError.innerHTML = 'Please enter a Molecular Weight';
        emptyFields ++;
    }

    if (emptyFields > 2){

        const mainError = document.querySelector('#container .errors');
        mainError.innerHTML = 'Please only leave one field empty.';

    } else {
        document.querySelector('.errors').innerHTML = ''; 

        // Depening on what field is empty we will perform a calculation
        // massField is empty
        if (massField === ''){
            let massCalculation = concentrationField * volumeField * mwField
            let massUnitdiff = massDefault - (concentrationDefault - concentrationUnit + volumeDefault - volumeUnit)

            document.querySelector('#mass').value = massCalculation;
            document.querySelector('#mass-unit').value = massUnitdiff;
        }

        // concentrationField is empty
        if (concentrationField === ''){
            let concentrationField = massField / (volumeField * mwField)

            let massDiff = massUnit - massDefault;
            //console.log('massDiff:' + massDiff)
            let volumeDiff = volumeUnit - volumeDefault;
            //console.log('volumeDiff:' + volumeDiff)
            let concentrationUnitdiff = concentrationDefault + (massDiff - volumeDiff)

            document.querySelector('#concentration').value = concentrationField;
            document.querySelector('#concentration-unit').value = concentrationUnitdiff;
        }

        // volumeField is empty
        if (volumeField === ''){
            let volumeField = massField / (concentrationField * mwField)

            let massDiff = massUnit - massDefault;
            let concentrationDiff = concentrationUnit - concentrationDefault;
            let volumeUnitdiff = volumeDefault + (massDiff - concentrationDiff)

            document.querySelector('#volume').value = volumeField;
            document.querySelector('#volume-unit').value = volumeUnitdiff;
        }

        // mwField is empty
        if (mwField === ''){
            let mwField = massField / (concentrationField * volumeField)

            let massDiff = massUnit - massDefault;
            console.log(typeof massDiff)
            let concentrationDiff = concentrationUnit - concentrationDefault;
            console.log(typeof concentrationDiff)
            let volumeDiff = volumeUnit - volumeDefault;
            console.log(typeof volumeDiff)
            let diffForMW = massDiff - concentrationDiff -volumeDiff


            document.querySelector('#mw').value = mwField * 10 ** diffForMW;
        }

       
    }
};

clearM = () =>{
    // Mass
    document.querySelector('#mass').value = '';
    const massDefault = 12;
    document.querySelector('#mass-unit').value = massDefault;

    // Concentration
    document.querySelector('#concentration').value = '';
    const concentrationDefault = 12;
    document.querySelector('#concentration-unit').value = concentrationDefault;
    

    // Volume
    document.querySelector('#volume').value = '';
    const volumeDefault = 6;
    document.querySelector('#volume-unit').value = volumeDefault;
    

    // Molecular Weight
    document.querySelector('#mw').value = '';


}

calculateD = () =>{

    // C1
    let c1Field = document.querySelector('#c1').value;
    let c1Unit = document.querySelector('#c1-unit').value;
    //const c1Default = 12;

    // V1
    let v1Field = document.querySelector('#v1').value;
    let v1Unit = document.querySelector('#v1-unit').value;
    //const v1Default = 12;

    // C2
    let c2Field = document.querySelector('#c2').value;
    let c2Unit = document.querySelector('#c2-unit').value;
    //const c2Default = 12;

    // V2
    let v2Field = document.querySelector('#v2').value;
    let v2Unit = document.querySelector('#v2-unit').value;
    //const v2Default = 12;

    let emptyFields = 0;

    // Check if all fields are filled
    if (c1Field === ''){
        emptyFields ++;
    }
        
    if (v1Field === ''){
        emptyFields ++;
    }

    if (c2Field === ''){
        emptyFields ++;
    }

    if (v2Field === ''){
        emptyFields ++;
    }

    if (emptyFields > 2){

        const mainError = document.querySelector('.calculator-brief .errors');
        mainError.innerHTML = 'Please only leave one field empty.';

    } else {
        document.querySelector('.calculator-brief .errors').innerHTML = ''; 

        // Depening on what field is empty we will perform a calculation
        // c1 is empty
        if (c1Field === ''){
            let c1Calculation = c2Field * v2Field / v1Field;
            let c2v2 = Number(c2Unit) + Number(v2Unit);
            let c1Unitdiff = c2v2 - v1Unit

            document.querySelector('#c1').value = c1Calculation;
            document.querySelector('#c1-unit').value = c1Unitdiff;
        }

        // v1 is empty
        if (v1Field === ''){
            let v1Calculation = c2Field * v2Field / c1Field;

            let c2v2 = Number(c2Unit) + Number(v2Unit);
            let v1Unitdiff = c2v2 - c1Unit

            document.querySelector('#v1').value = v1Calculation;
            document.querySelector('#v1-unit').value = v1Unitdiff;
        }

        // c2 is empty
        if (c2Field === ''){
            let c2Calculation = c1Field * v1Field / v2Field;
            let c1v1 = Number(c1Unit) + Number(v1Unit);
            let c2Unitdiff = c1v1 - v2Unit

            document.querySelector('#c2').value = c2Calculation;
            document.querySelector('#c2-unit').value = c2Unitdiff;
        }

        // v2 is empty
        if (v2Field === ''){
            let v2Calculation = c1Field * v1Field / c2Field;
            let c1v1 = Number(c1Unit) + Number(v1Unit);
            let v2Unitdiff = c1v1 - c2Unit

            document.querySelector('#v2').value = v2Calculation;
            document.querySelector('#v2-unit').value = v2Unitdiff;
        }



       
    }
};

clearD = () =>{
    // C1
    document.querySelector('#c1').value = '';
    const c1Default = 9;
    let c1Unit = document.querySelector('#c1-unit').value = c1Default;


    // V1
    document.querySelector('#v1').value = '';
    const v1Default = 3;
    let v1Unit = document.querySelector('#v1-unit').value = v1Default;


    // C2
    document.querySelector('#c2').value = '';
    const c2Default = 9;
    let c2Unit = document.querySelector('#c2-unit').value = c2Default;


    // V2
    document.querySelector('#v2').value = '';
    const v2Default = 3;
    let v2Unit = document.querySelector('#v2-unit').value = v2Default;


}

calculateC = () =>{

    // Concentration
    let conField = document.querySelector('#con').value;
    //const c1Default = 12;

    // Mass
    let maField = document.querySelector('#ma').value;
    let maUnit = document.querySelector('#ma-unit').value;
    //const v1Default = 12;

    // Volume
    let volField = document.querySelector('#vol').value;
    let volUnit = document.querySelector('#vol-unit').value;
    //const c2Default = 12;


    let emptyFields = 0;

    // Check if all fields are filled
    if (conField === ''){
        emptyFields ++;
    }
        
    if (maField === ''){
        emptyFields ++;
    }

    if (volField === ''){
        emptyFields ++;
    }

    if (emptyFields > 2){

        const mainError = document.querySelector('.calculator-brief .errors-conc');
        mainError.innerHTML = 'Please only leave one field empty.';

    } else {
        document.querySelector('.calculator-brief .errors-conc').innerHTML = ''; 

        // Depening on what field is empty we will perform a calculation
        // Concentration is empty
        if (conField === ''){
            let conCalculation = maField / volField;

            let maUnitField = document.querySelector('#ma-unit')
            let valueMa = maUnitField.value;
            let textMa = maUnitField.options[maUnitField.selectedIndex].text;

            let volUnitField = document.querySelector('#vol-unit')
            let valueVol = volUnitField.value;
            let textVol = volUnitField.options[volUnitField.selectedIndex].text;

            if (conCalculation >= 1000 ) {
                document.querySelector('#con').value = conCalculation /1000;
                maUnitField.value = valueMa + 3;
            } else {
                document.querySelector('#con').value = conCalculation;
                document.querySelector('#con-unit').innerHTML = textMa + ' / ' + textVol;
            }

            

        // Mass is empty
        } else if (maField === '') {
            let volMultiplier = 1;
            switch(volUnit) {
                case '6':
                    break;
                case '3':
                    volMultiplier = 1000;
                    break;
                case '0':
                    volMultiplier = 1000000;
                    break;
            }

            let maCalculation = conField * volField / volMultiplier;


            document.querySelector('#ma').value = maCalculation;
            document.querySelector('#ma-unit').value = 12;
            document.querySelector('#con-unit').innerHTML = 'g / L';

            

        } // Volume is empty
        else if (volField === '') {
            let maMultiplier = 1;
            switch(maUnit) {
                case '15':
                    maMultiplier = 0.001;
                    break;
                case '12':
                    break;
                case '9':
                    maMultiplier = 1000;
                    break;
                case '6':
                    maMultiplier = 1000000;
                    break;
                case '3':
                    maMultiplier = 1000000000;
                    break;
                case '0':
                    maMultiplier = 1000000000000;
                    break;
            }

            let volCalculation =  maField / maMultiplier / conField;
            document.querySelector('#con-unit').innerHTML = 'g / L';
            if (volCalculation < 0.01) {
                document.querySelector('#vol').value = volCalculation * 1000;
                document.querySelector('#vol-unit').value = 6 - 3;

                let maUnitField = document.querySelector('#ma-unit')
                let volUnitField = document.querySelector('#vol-unit')
                let textMa = maUnitField.options[maUnitField.selectedIndex].text;
                let textVol = volUnitField.options[volUnitField.selectedIndex].text;
                document.querySelector('#con-unit').innerHTML = textMa + ' / ' + textVol;
            } else {
                document.querySelector('#vol').value = volCalculation;
                document.querySelector('#vol-unit').value = 6;
            }
            

        }
  
    }
};

clearC = () =>{
    // Concentration
    document.querySelector('#con').value = '';
    document.querySelector('#con-unit').innerHTML = 'g / L';

    // Mass
    document.querySelector('#ma').value = '';
    const maDefault = 12;
    document.querySelector('#ma-unit').value = maDefault;


    // Volume
    document.querySelector('#vol').value = '';
    const volDefault = 6;
    document.querySelector('#vol-unit').value = volDefault;
}
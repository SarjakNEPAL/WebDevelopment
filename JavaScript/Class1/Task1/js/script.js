function getPercentage(Got, Total) {
    if (Total == 0) {
        return 0; // Avoid division by zero
    }
    return ((Got / Total) * 100);
}

function calculate() {
    var SDmark = parseFloat(document.getElementById('OM_SD').value);
    var SDFmark = parseFloat(document.getElementById('FM_SD').value);
    var WDmarks= parseFloat(document.getElementById('OM_WD').value);
    var WDFmarks= parseFloat(document.getElementById('FM_WD').value);
    var MADmarks= parseFloat(document.getElementById('OM_MAD').value);
    var MADFmarks= parseFloat(document.getElementById('FM_MAD').value);
    var PDmarks = parseFloat(document.getElementById('OM_PD').value);
    var PDFmarks = parseFloat(document.getElementById('FM_PD').value);

    function getPercentage(Got, Total) {
        if (Total == 0) {
            return 0; // Avoid division by zero
        }
        return ((Got / Total) * 100);
    }
    
    function calculate() {
        var SDmark = parseFloat(document.getElementById('OM_SD').value);
        var SDFmark = parseFloat(document.getElementById('FM_SD').value);
        var WDmark = parseFloat(document.getElementById('OM_WD').value);
        var WDFmark = parseFloat(document.getElementById('FM_WD').value);
        var MADmark = parseFloat(document.getElementById('OM_MAD').value);
        var MADFmark = parseFloat(document.getElementById('FM_MAD').value);
        var PDmark = parseFloat(document.getElementById('OM_PD').value);
        var PDFmark = parseFloat(document.getElementById('FM_PD').value);
    
        var SD_percentage = getPercentage(SDmark, SDFmark);
        var WD_percentage = getPercentage(WDmark, WDFmark);
        var MAD_percentage = getPercentage(MADmark, MADFmark);
        var PD_percentage = getPercentage(PDmark, PDFmark);
    
        document.getElementById("output_SD").innerText = SD_percentage.toFixed(2) + "%";
        document.getElementById("output_WD").innerText = WD_percentage.toFixed(2) + "%";
        document.getElementById("output_MAD").innerText = MAD_percentage.toFixed(2) + "%";
        document.getElementById("output_PD").innerText = PD_percentage.toFixed(2) + "%";
    
        var overall = (SD_percentage + WD_percentage + MAD_percentage + PD_percentage) / 4;
        alert(overall);
        document.getElementById('here').innerText = overall+ "%";
    
        return false; // Prevent form submission
    }
   
}

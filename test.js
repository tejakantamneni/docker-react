 
 alert('test')
 
 function generateEmbeddedUrl() {
            // Get input values
            var value1 = document.getElementById('input1').value;
            var value2 = document.getElementById('input2').value;

            // Construct embedded URL
            var embeddedUrl = '../../xmlpserver/Custom/Fellowes CI Reports/Fellowes Mfg Label Report.xdo?_xpt=1&_xmode=2&p_wo_number=#{bindings.WorkOrderNumber.inputValue}&p_ctn_from=' + encodeURIComponent(value1) + '&p_ctn_to=' + encodeURIComponent(value2);

            // For demonstration purposes, you can log the URL or open it in a new tab/window
            console.log(embeddedUrl);

            // If you want to open the URL in a new tab/window, uncomment the line below
            window.open(embeddedUrl, '_blank');
        }
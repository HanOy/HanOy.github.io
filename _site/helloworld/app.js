$(function(){
    var earth;
    var marker;
    earth = new WE.map('earth_div',{
        atmosphere:true,
        sky:true
    });
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

    $.getJSON("userinfo.json",function(data){  
        $.each(data,function(infoIndex,info){
            marker = WE.marker([info["point"]]).addTo(earth);
            marker.bindPopup(info["desc"], {maxWidth: 100, closeButton: true});
        })  
    })  

    earth.setView([34.262278, 103.628637], 3);
    function flyToMe() {
        earth.panInsideBounds([31.056144060646687, 31.38522435978879, 120.78966784638101, 122.19440192910949])
        marker.openPopup();
    }
    function back() {
        earth.panInsideBounds([10.32268236188567, 48.86931220325214, 63.53559837081185, 143.72167565826413])
        marker.closePopup();
    }
})

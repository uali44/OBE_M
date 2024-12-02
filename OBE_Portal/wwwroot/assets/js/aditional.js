

//  =======Tabs Remain Selected on page refresh=======//
$(function() { 
    //for bootstrap 3 use 'shown.bs.tab' instead of 'shown' in the next line
    $('a[data-toggle="tab"]').on('click', function (e) {
        //save the latest tab; use cookies if you like 'em better:
        localStorage.setItem('lastTab', $(e.target).attr('href'));
    });

    //go to the latest tab, if it exists:
    var lastTab = localStorage.getItem('lastTab');

    if (lastTab) {
        $('a[href="'+lastTab+'"]').click();
    }
});



//  =======Popover on click=======//
$(function () {
    $("[data-toggle=popover]").popover();

    $(".popover-section").css("display","none");

    $('.popover-bottom').popover({
        html:true,
        placement:'auto bottom',
        //trigger: 'hover',
        content:function(){
            return $($(this).data('popwrapper')).html();
        }
    });

    $('.popover-left').popover({
        html:true,
        placement:'auto left',
        //trigger: 'hover',
        content:function(){
            return $($(this).data('popwrapper')).html();
        }
    });

    $('.popover-top').popover({
        html:true,
        placement:'auto top',
        //trigger: 'hover',
        content:function(){
            return $($(this).data('popwrapper')).html(); 
        }
    });

    $('.popover-right').popover({
        html:true,
        placement: 'auto right',
        //trigger: 'hover',
        content:function(){
            return $($(this).data('popwrapper')).html();
        }

    });
    

    //$(".pop").popover({ trigger: "manual" , html: true, animation:false})
    //    .on("mouseenter", function () {
    //        var _this = this;
    //        $(this).popover("show");
    //        $(".popover").on("mouseleave", function () {
    //            $(_this).popover('hide');
    //        });
    //    }).on("mouseleave", function () {
    //        var _this = this;
    //        setTimeout(function () {
    //            if (!$(".popover:hover").length) {
    //                $(_this).popover("hide");
    //            }
    //        }, 300);
    //});


});



//  =======PopOver close=======//

var $elements = $('[rel=popover]');
$elements.each(function () {
    var $element = $(this);

    $element.on('shown.bs.popover', function () {
        var popover = $element.data('bs.popover');
        if (typeof popover !== "undefined") {
            var $tip = popover.tip();
            zindex = $tip.css('z-index');

            $tip.find('.close').bind('click', function () {
                popover.hide();
            });
            $tip.find('.pop-cancel').bind('click', function () {
                popover.hide();
            });

        }

    });
});


//  =======Add Responsive class outside of table=======//

$('table').wrap('<div class="table-responsive" />');


//  =======Patient List Note Columns Slides=======//
$("#patient-list .slide-panel").click(function(e){
    $("#patient-list .notes-content").toggleClass("full-width");
});


//  =======Page Modal/Popup Style=======//

$("#amazing-fusion .modal .modal-right .close-panel a").click(function(e){
    $( "#amazing-fusion .modal .modal-dialog .modal-left" ).toggle( 'slow' );
    $("#amazing-fusion .modal .modal-right .close-panel a i").toggleClass("app-icon-IconSet-1-70");
});

//  =======Family History Modal/Popup Style=======//

$("#amazing-fusion .modal-page .modal-right .family-history-popup").click(function(e){
    $( "#past-medical-history" ).css('display','none');
});

$("#amazing-fusion #family-history .family-history-close").click(function(e){
    $( "#past-medical-history" ).css('display','block');
});


//  =======Social History Modal/Popup Style=======//

$("#amazing-fusion .modal-page .modal-right .social-history-popup").click(function(e){
    $( "#past-medical-history" ).css('display','none');
});

$("#amazing-fusion #patient-social-history .social-history-close").click(function(e){
    $( "#past-medical-history" ).css('display','block');
});


//  =======Recent Notes Menu=======// 

$('#patient-list .notes-list li').click(function(e){
    $('#patient-list .notes-list li').removeClass('selected');
    $(this).addClass('selected');
});




//  =======Document Change on next and previous=======// 
$(".next-doc").click(function(e) {
    $("#document-viewer iframe").attr("src","documents/doc.jpg");  
});
$(".prev-doc").click(function(e) {
    $("#document-viewer iframe").attr("src","documents/doc.pdf");  
});

//  =======Document Show/Hide Fields=======// 
$("#amazing-fusion #docview .document-section .close-panel a").click(function(e){
    $( "#amazing-fusion #docview .modal-body .document-fields" ).toggle( 'slow' );
    $("#amazing-fusion #docview .document-section .close-panel a i").toggleClass("app-icon-IconSet-1-70");
    $("#amazing-fusion #docview .document-section").toggleClass("col-sm-7 col-md-8 col-lg-9");
});


//  =======Popover=======// 

$(function () {
    $('[data-toggle="popover"]').popover();
})


//  =======Switch ON/Off change text=======// 

$(".switch input").click(function() {
    if($(this).is(':checked')) {
        $(".switch .value").text("Active");
    } else {
        $(".switch .value").text("Inactive");
    }
});



//  =======On Width 767px hide note listing=======// 
$(document).ready(function() {
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize < 767) {
            $("#patient-list .notes-content").addClass("full-width");
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

//  =======Medication Alert Popup=======// 
$("#Medicine-alert").click(function(e) {
    $("#Medicine-alert-box").slideToggle();
});
$("#Medicine-alert-box .medicine-close").click(function(e) {
    $("#Medicine-alert-box").slideToggle();
});



//  =======Medication Build Sig=======// 
$("#build-sig").click(function(e) {
    $("#build-sig-box").slideToggle();
});
$("#build-sig-box .build-sig-close").click(function(e) {
    $("#build-sig-box").slideToggle();
});

$("#build-sig-box .build-sig-box ul li").click(function(e) {
    $("#build-sig-box .build-sig-box ul li").removeClass("active");
    $(this).addClass("active");
});




//  =======Immunizations Inventory Setup Popup=======// 
$("#amazing-fusion #immunizations .inventory-setup").click(function(e){
    $( "#immunizations" ).css('display','none');
});

$("#amazing-fusion #inventory-setup .inventory-setup-close").click(function(e){
    $( "#immunizations" ).css('display','block');
});


//  =======Message Main Navigation=======// 

$("#messages .message-navigation li").click(function() {
    $("#messages .message-navigation li").removeClass("active");
    $(this).addClass("active");
});


//  =======List Dragable=======// 

$( ".sortable" ).sortable();
$( ".sortable" ).disableSelection();

//  =======Enable Search if has value=======// 

$('.search input.form-control').on('keyup', function () {
    $(".search input.form-control").filter(function () {
        this.value == '' ? $('.search').addClass('empty-field') : $('.search').removeClass('empty-field')
    });
});


//  =======collapsible table rows=======// 
$('.collapsable-table .collapse-row td .icon').click(function(){
    $(this).parent().parent().find('span').text(function(_, value){return value=='-'?'+':'-'});
    $(this).parent().parent().nextUntil('tr.collapse-row').toggle();
});

//  =======ICD table rows=======// 
$('.collapsable-table .collapse-row td .icd-edit').click(function(){
    $(this).parent().parent().nextUntil('tr.collapse-row').toggle();
});



//  =======Generic Dropdown=======// 
$(".slide-click").click(function(e) {
    $(this).parent().next(".slide-content").slideToggle(300);
    e.stopPropagation();
});



//  =======Right Panel Edit=======// 

$(".edit-items").click(function(e) {
    $("ul.add-review-list").toggleClass("sortable");
});


//  =======Generic Selected Class=======// 


// active on selected li
var List_Active = '.nav-blue-active li'; // making variable for selecting li

$(List_Active).on('click', function(e){
    $(List_Active).removeClass('active');
    $(this).addClass('active');
    e.preventDefault();	
});



//  =======Add Scroller Height outside the Modal Body=======// 
$('#amazing-fusion .modal-page .modal-body').wrap('<div class="popup-scroller mCustomScrollbar" />');
$('#amazing-fusion .modal-wide .modal-body').wrap('<div class="popup-scroller mCustomScrollbar" />');
$('#amazing-fusion .modal-inside .modal-body').wrap('<div class="popup-scroller mCustomScrollbar" />');





//  =======Message Details Style=======// 

$("#mail-list-view .show-mail-details").click(function(e) {
    $("#email-detail-veiw").css('display','block');
    $(".back-mail-list").css('display','block');
    $("#mail-list-view").css('display','none');
});
$(".back-mail-list").click(function(e) {
    $("#email-detail-veiw").css('display','none');
    $("#mail-list-view").css('display','block');
    $(".back-mail-list").css('display','none');
});

//  =======Dropdown Vlaue Style=======//
$(".dropdown-menu li a").click(function(){
    var dropval = $(this).html();
    $(this).parents('.custom-dropdown').find('.btn').html(dropval + ' <span class="caret"></span>');
});	

//  =======Range Slider=======//

$( function() {
    $( ".slider-range-min" ).slider({
        range: "min",
        value: 20,
        min: 0,
        max: 60,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value + " hour(s)" + " & " + "10 Min(s)" );
        }
    });
    $( "#amount" ).val( $( ".slider-range-min" ).slider( "value" ) + " hour(s)" + " & " + "0 Min(s)" );
} );



//  =======Talking Feature Header Style=======//
$('.talking-feature .talk-content .talk-icon').click(function(){
    $(this).parent().toggleClass('voice-active');
    $(this).children('span').toggleClass('listening');
    //$(".voice-assistant").css('display','block');
});
$('header .talking-feature .talk-content .assistant-panel').click(function(){
    $('.talking-feature .talk-content .voice-assistant').slideToggle();
});
$('.close-allison-help').click(function(){
    $('.talking-feature .talk-content .voice-assistant').slideToggle();
});

//  ======= Toggle Button Animation =======//
$(".c-hamburger").click(function(){
    $(this).toggleClass('is-active');
});	

//  =======Tooltip Style=======//
$('[title]').tooltip();



//  ======= Profile Pic croper and uploder=======//
window.onload = function () {
    var options =
        {
            imageBox: '.imageBox',
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'avatar.png'
        }
    var cropper = new cropbox(options);
    document.querySelector('#file').addEventListener('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            options.imgSrc = e.target.result;
            cropper = new cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    document.querySelector('#btnCrop').addEventListener('click', function () {
        var img = cropper.getDataURL();
        document.querySelector('.cropped').innerHTML = '<img src="' + img + '">';
    })
    document.querySelector('#btnZoomIn').addEventListener('click', function () {
        cropper.zoomIn();
    })
    document.querySelector('#btnZoomOut').addEventListener('click', function () {
        cropper.zoomOut();
    })
};


//  ======= Dashboard Add Class=======//
$('#dashboard .tabs-menu .nav-tabs li:first-child').addClass('dashboard-bg');
$('#dashboard a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if ($('#dashboard-tab').hasClass('active')){
        $('body').addClass('dashboard-bg');
    } else {
        $('body').removeClass('dashboard-bg');
    }
});
$('.nav-sidebar .tabs a').click(function(e) {
    $('body').removeClass('dashboard-bg');
});
$('.nav-sidebar .tabs li:first-child a').click(function(e) {
    if ($('#dashboard-tab').hasClass('active')){
        $('body').addClass('dashboard-bg');
    } else {
        $('body').removeClass('dashboard-bg');
    }
});


//  ======= Take a Tour Menu=======//
//$('a').click(function(e) {
//if ($('div').hasClass('introjs-overlay')){
//$('body').addClass('working-tour');
//} else {
//$('body').removeClass('working-tour');
//}
//});


//  ======= Allison Help Guide slide Menu=======//
$(document).ready(function() {
    $('.sliding-modules').slinky({
        title: true,
    });
});


//  ======= Update scroller on window resize=======//
$(window).resize(function(){
    $(".mCustomScrollbar").mCustomScrollbar("update");
});


//  ======= Shake Modal on outside click=======//
$(".modal-backdrop").click(function(e) {
    $(".modal-dialog" ).effect( "shake" );
});


//  ======= Accordion Tabs=======//
$('.collapse.in').prev('.panel-heading').addClass('active');
$('#accordion, #bs-collapse')
    .on('show.bs.collapse', function (a) {
    $(a.target).prev('.panel-heading').addClass('active');
})
    .on('hide.bs.collapse', function (a) {
    $(a.target).prev('.panel-heading').removeClass('active');
});


$(document).ready(function() {

    //  ======= teleHealth=======//
    $(".telehealth-call").click(function(e){
        $("#telehealth-section").slideToggle();
    });
    $("#minimize-telehealth").click(function(e){
        $("#telehealth-section").slideToggle();
        $(".telehealth-minimize").slideToggle();
    });
    $("#maximize-telehealth").click(function(e){
        $("#telehealth-section").slideToggle();
        $(".telehealth-minimize").slideToggle();
    });

    $(".telehealth-end").click(function(e){
        $("#telehealth-section").hide();
        $(".telehealth-minimize").hide();
        $("#telehealth-section").removeClass("expanded");
    });
    $("#minimize-provider").click(function(e){
        $(".provider-video").slideToggle();
    });
    $("#telehealth-chat").click(function(e){
        $(".telehealth-chat").slideToggle();
    });
    $(".telehealth-voice a").click(function(e){
        $(".telehealth-voice").toggleClass("muted");
    });
    $(".video-controls .video a").click(function(e){
        $(".video-controls .video").toggleClass("hide-video");
    });
    $(".video-controls .chat a").click(function(e){
        $(".video-controls .chat").toggleClass("hide-chat");
    });
    $("#expand").click(function(e){
        $("#telehealth-section").toggleClass("expanded");
    });


    $( "#draggable" ).draggable({containment: "parent"});
    $( "#telehealth-section" ).draggable({
        containment: ".dragging-area"
    });

});



//  ======= Quick Pick Tree View =======//
$.fn.extend({
    treed: function (o) {

        var openedClass = 'glyphicon-minus-sign';
        var closedClass = 'glyphicon-plus-sign';

        if (typeof o != 'undefined'){
            if (typeof o.openedClass != 'undefined'){
                openedClass = o.openedClass;
            }
            if (typeof o.closedClass != 'undefined'){
                closedClass = o.closedClass;
            }
        };

        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
        tree.find('.branch .indicator').each(function(){
            $(this).on('click', function () {
                $(this).closest('li').click();
            });
        });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$('#quickpick-tree').treed();

$('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});






$(document).ready(function() {


    //  ======= Sticky Table =======//
    $('.table-sticky').fixedHeaderTable();





    //  ======= Canvas Js Doughnut =======//
    window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer", {
            width: 500,
            height: 400,
            animationEnabled: true,
            title:{
                text: ""
            },
            legend:{
                cursor: "pointer",
                itemclick: explodePie
            },
            data: [{
                type: "doughnut",
                innerRadius: 99,
                showInLegend: true,
                toolTipContent: "<b>{name}</b>: (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    { y: 60, name: "Advancing", color:"#ffa700" },
                    { y: 60, name: "Improvement", color:"#0864a6" },
                    { y: 60, name: "Quality", color:"#08a62b" }
                ]
            }]
        });
        chart.render();

        function explodePie (e) {
            if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
            } else {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
            }
            e.chart.render();
        }





        var chart = new CanvasJS.Chart("chartContainer2", {
            width: 300,
            height: 140,
            animationEnabled: true,
            title:{
                text: "Advancing",
                verticalAlign: "center",
                horizontalAlign: "center",
                fontFamily: "arial",
                fontWeight: "bold",
                fontColor: "#ffa700",
                fontSize: 13
            },
            legend:{
                cursor: "pointer",
                itemclick: explodePie
            },
            data: [{
                type: "doughnut",
                innerRadius: 40,
                showInLegend: false,
                toolTipContent: "<b>{name}</b>: (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    { y: 20, name: "Empty", color:"#ccc"},
                    { y: 80, name: "Advancing", color:"#ffa700" }
                ]
            }]
        });
        chart.render();

        function explodePie (e) {
            if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
            } else {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
            }
            e.chart.render();
        }




        var chart = new CanvasJS.Chart("chartContainer3", {
            width: 300,
            height: 140,
            animationEnabled: true,
            title:{
                text: "Improvement",
                verticalAlign: "center",
                horizontalAlign: "center",
                fontFamily: "arial",
                fontWeight: "bold",
                fontColor: "#0864a6",
                fontSize: 12
            },
            legend:{
                cursor: "pointer",
                itemclick: explodePie
            },
            data: [{
                type: "doughnut",
                innerRadius: 40,
                showInLegend: false,
                toolTipContent: "<b>{name}</b>: (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    { y: 45, name: "Empty", color:"#ccc"},
                    { y: 55, name: "Improvement", color:"#0864a6" }
                ]
            }]
        });
        chart.render();

        function explodePie (e) {
            if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
            } else {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
            }
            e.chart.render();
        }


        var chart = new CanvasJS.Chart("chartContainer4", {
            width: 300,
            height: 140,
            animationEnabled: true,
            title:{
                text: "Quality",
                verticalAlign: "center",
                horizontalAlign: "center",
                fontFamily: "arial",
                fontWeight: "bold",
                fontColor: "#08a62b",
                fontSize: 13
            },
            legend:{
                cursor: "pointer",
                itemclick: explodePie
            },
            data: [{
                type: "doughnut",
                innerRadius: 40,
                showInLegend: false,
                toolTipContent: "<b>{name}</b>: (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    { y: 30, name: "Empty", color:"#ccc"},
                    { y: 70, name: "Quality", color:"#08a62b" }
                ]
            }]
        });
        chart.render();

        function explodePie (e) {
            if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
            } else {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
            }
            e.chart.render();
        }


    }


    //  ======= Show Drop Down outsite of Table TD =======//

    $(function() {
        //add BT DD show event
        $(".dropdown").on("show.bs.dropdown", function() {
            var $btnDropDown = $(this).find(".dropdown-toggle");
            var $listHolder = $(this).find(".dropdown-menu");
            //reset position property for DD container
            $(this).css("position", "static");
            $listHolder.css({
                "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
                "left": $btnDropDown.offset().left + "px"
            });
            $listHolder.data("open", true);
        });
        //add BT DD hide event
        $(".dropdown").on("hidden.bs.dropdown", function() {
            var $listHolder = $(this).find(".dropdown-menu");
            $listHolder.data("open", false);
        });
        //add on scroll for table holder
        $(".ak-holder").scroll(function() {
            var $ddHolder = $(this).find(".dropdown")
            var $btnDropDown = $(this).find(".dropdown-toggle");
            var $listHolder = $(this).find(".dropdown-menu");
            if ($listHolder.data("open")) {
                $listHolder.css({
                    "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
                    "left": $btnDropDown.offset().left + "px"
                });
                $ddHolder.toggleClass("open", ($btnDropDown.offset().left > $(this).offset().left))
            }
        })
    });


});




//  ======= Patient Encounter Dragable Modals =======//
$( ".modal-dragable .modal-dialog" ).draggable({
    containment: ".dragging-area"
});


//  ======= Minimize/Maximize Modal =======//
$(".minimize-modal").click(function(e){
    $(this).parent().parent().parent().parent().parent().parent().slideToggle();
    $(".modal-minimize").slideToggle();
    $(".modal-backdrop").hide();
});
$("#maximize-modal").click(function(e){
    $(".modal-dragable.in").slideToggle();
    $(".modal-minimize").slideToggle();
    $(".modal-backdrop").show();
});






//  ======= Multi Level Dropdown Menu =======//
$(document).ready(function () {

    $('.table-responsive').scroll(function () {
        $('header .practice').click();
    });


    $('.dropdown-submenu a.sub-link').on("click", function (e) {
        $(this).next('ul').toggle();
        $(".mCustomScrollbar").mCustomScrollbar();
        e.stopPropagation();
        e.preventDefault();
    });


    (function () {
        var dropdownMenu;
        $(window).on('show.bs.dropdown', function (e) {
            dropdownMenu = $(e.target).find('.dropdown-menu.tasks-dropdown');
            $('#tasks').append(dropdownMenu.detach());
            dropdownMenu.css('display', 'block');
            dropdownMenu.position({
                'my': 'right top',
                'at': 'right bottom',
                'of': $(e.relatedTarget)
            })
        });
        $(window).on('hide.bs.dropdown', function (e) {
            $(e.target).append(dropdownMenu.detach());
            dropdownMenu.hide();
        });
    }); 

});


//  ======= Map on Hover =======//
$("map").mapoid();

//  =======collapsible table rows=======//
$('.slide-header').click(function(){
    $(this).find('.slide-content').toggleClass("fa-chevron-up fa-chevron-down");
    $(this).nextUntil('li.slide-header').toggle(400);
});

//  =======Physical Therapy Print Checkbox Checked Show Content=======//
$("#custom-plan").click(function () {
    if ($(this).is(":checked")) {
        $(".plan-preview-section").show();
    } else {
        $(".plan-preview-section").hide();
    }
});

$("#custom-daily-progress").click(function () {
    if ($(this).is(":checked")) {
        $(".daily-progress-section").show();
    } else {
        $(".daily-progress-section").hide();
    }
});

$("#custom-discharge-notes").click(function () {
    if ($(this).is(":checked")) {
        $(".discharge-notes-section").show();
    } else {
        $(".discharge-notes-section").hide();
    }
});

$("#custom-physical-assessment").click(function () {
    if ($(this).is(":checked")) {
        $(".physical-assessment-section").show();
    } else {
        $(".physical-assessment-section").hide();
    }
});

//  =======Physical Therapy Normal and Save as previous radio=======//
$("#inspection-normal").click(function () {
    if ($(this).is(":checked")) {
        $(".inspection-selected-normal").show();
        $(".inspection-selected-save-previous").hide();
    } else {
        $(".inspection-selected-normal").hide();
        $(".inspection-selected-save-previous").show();
    }
});

$("#inspection-save-previous").click(function () {
    if ($(this).is(":checked")) {
        $(".inspection-selected-save-previous").show();
        $(".inspection-selected-normal").hide();
    } else {
        $(".inspection-selected-save-previous").hide();
        $(".inspection-selected-normal").show();
    }
});

$("#palpation-normal").click(function () {
    if ($(this).is(":checked")) {
        $(".palpation-selected-normal").show();
        $(".palpation-selected-save-previous").hide();
    } else {
        $(".palpation-selected-normal").hide();
        $(".palpation-selected-save-previous").show();
    }
});

$("#palpation-save-previous").click(function () {
    if ($(this).is(":checked")) {
        $(".palpation-selected-save-previous").show();
        $(".palpation-selected-normal").hide();
    } else {
        $(".palpation-selected-save-previous").hide();
        $(".palpation-selected-normal").show();
    }
});


//  =======Physical Diagram open tabs rows=======//
$("#front-diagram .circ2,#front-diagram .circ").click(function () {
    $("[href='#sholuder-joint-tab']").trigger('click');
});
$("#front-diagram .circ7,#front-diagram .circ8").click(function () {
    $("[href='#hip-joint-tab']").trigger('click');
});
$("#front-diagram .circ13,#front-diagram .circ14").click(function () {
    $("[href='#knee-joint-tab']").trigger('click');
});
$("#front-diagram .circ15,#front-diagram .circ16,#front-diagram .circ17,#front-diagram .circ18").click(function () {
    $("[href='#foot-ankle-tab']").trigger('click');
});

$("#back-diagram .scirc2").click(function () {
    $("[href='#cervical-spine-tab']").trigger('click');
});
$("#back-diagram .scirc").click(function () {
    $("[href='#thoracic-spine-tab']").trigger('click');
});
$("#back-diagram .scirc3").click(function () {
    $("[href='#lumbosacral-spine-tab']").trigger('click');
});

//  =======Physical Settings for Inspection=======//
$("#therapy-inspection-status").click(function () {
    if ($(this).is(":checked")) {
        $(".inspection-setting").show();
    } else {
        $(".inspection-setting").hide();
    }
});


$("#physical-palpation-status").click(function () {
    if ($(this).is(":checked")) {
        $(".palpation-setting").show();
    } else {
        $(".palpation-setting").hide();
    }
});

//  =======Physical Cervical Special Test=======//

$("#cervical-special-negative").click(function () {
    if ($(this).is(":checked")) {
        $(".cervical-default-test").hide();
        $(".cervical-test-positive").hide();
        $(".cervical-test-negative").show();
    } else {
        $(".cervical-test-positive").hide();
    }
});
$("#cervical-special-positive").click(function () {
    if ($(this).is(":checked")) {
        $(".cervical-default-test").hide();
        $(".cervical-test-negative").hide();
        $(".cervical-test-positive").show();
    } else {
        $(".cervical-test-negative").hide();
    }
});


//  =======Physical Cervical Neurological=======//

$("#neurological-status-normal").click(function () {
    if ($(this).is(":checked")) {
        $(".neurological-previous-values").hide();
        $(".neurological-normal-values").show();
    } else {
        $(".neurological-normal-values").hide();
    }
});
$("#neurological-status-previous").click(function () {
    if ($(this).is(":checked")) {
        $(".neurological-normal-values").hide();
        $(".neurological-previous-values").show();
    } else {
        $(".neurological-previous-values").hide();
    }
});



//  =======Date and Time Picker Style=======//

$('.datepicker').datetimepicker({
    format: 'MM/dd/yyyy',
    pickTime: false
});

$('.timepicker').datetimepicker({
    pickDate: false,
    pickTime: true
});

//  =======Color Picker Style=======//

$('.colorpicker').colorpicker();


$(document).ready(function () {

    //  =======Custom Scroller=======//
    $(".mCustomScrollbar").mCustomScrollbar();

    //  =======Scroll for width Style=======// 

    $(".scroller-width").mCustomScrollbar({
        axis:"x",
        advanced:{
            autoExpandHorizontalScroll:true
        }
    });

    //  =======Table Dragable=======// 
    $(".table-row-dragable").rowSorter({});



    //  =======Text Editor=======// 
    editor();
    htmlEditor('.editor', '');
    $('[title]').tooltip({
        container: 'body'
    });







    //  =======Dashboard Widget High Charts===//
    $('#aging-graph').highcharts({
        chart: {
            type: 'column',
            backgroundColor: null,
            height: 315
        },
        colors: ['#1a60a8', '#6dafe1'],
        title: {
            text: null
        },
        xAxis: {
            categories: [
                'DE',
                'NJ',
                'NY'
            ],
            crosshair: true
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif'
            },
            align: 'center',
            verticalAlign: 'bottom'
        },
        yAxis: {
            min: 0,
            title: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'Patient',
            data: [22.9, 85.5, 106.4]

        }, {
            name: 'Insurance',
            data: [22.9, 72.8, 98.5]
        }]
    });


});

//  =======Trigger Search Appointments=======// 
function triggersearchappointments() {
    $('[href="#search-appointments"]').click();
}

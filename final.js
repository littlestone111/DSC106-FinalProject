var all_data = {'Wharton' :["Wharton Business School",{minPointSize: 10,
    innerSize: '20%',
    zMin: 0,data: [
                    {name:"Bain",
                    y:479,
                    z:125,
                    color:'#bf7777'
                    },
                    {name:"BCG",
                    y:653,
                    z:200,
                    color:'#629a88'
                },
                {name:'Mckinsey',
                    y:750,
                    z: 275,
                    color:"#566573"
                },
                ]}],
                'HBS' : ['Harvard Business School' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:457,
                            z:125,
                            color:'#bf7777'
                        },
                        {name:"BCG",
                            y:518,
                            z:200,
                            color:'#629a88'
                        },
                        {name:'Mckinsey',
                            y:765,
                            z: 275,
                            color:"#566573"},
                        ]}],
                'Standford GSB': ['Stanford Graduate School of Business' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:140,
                            z:125,
                            color:'#bf7777'
                        },
                        {name:"BCG",
                            y:167,
                            z:200,
                            color:'#629a88'
                        },
                        {name:'Mckinsey',
                            y:254,
                            z: 275,
                            color:"#566573"},
                        ]}],
                'Kellogg': ['Kellogg School of Management' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:450,
                            z:200,
                            color:'#bf7777'
                        },
                        {name:"BCG",
                            y:327,
                            z:125,
                            color:'#629a88'
                        },
                        {name:'Mckinsey',
                            y:465,
                            z: 275,
                            color:"#566573"},
                        ]}],
                'Booth': ['Booth School of Business' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:189,
                            z:125,
                            color:'#bf7777'
                        },
                        {name:"BCG",
                            y:302,
                            z:200,
                            color:'#629a88'
                        },
                        {name:'Mckinsey',
                            y:434,
                            z: 275,
                            color:"#566573"},
                        ]}],
                'CBS': ['Columbia Business School' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:167,
                            z:125,
                            color:'#bf7777'
                        },
                        {name:"BCG",
                            y:260,
                            z:200,
                            color:'#629a88'
                        },
                        {name:'Mckinsey',
                            y:474,
                            z: 275,
                            color:"#566573"},
                        ]}],
                'Sloan': ['Sloan School of Management' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:149,
                            z:125,
                            color:'#bf7777'
                        },
                        {name:"BCG",
                            y:214,
                            z:200,
                            color:'#629a88'
                        },
                        {name:'Mckinsey',
                            y:294,
                            z: 275,
                            color:"#566573"},
                        ]}],
            };

function school_pie_draw(name){
    Highcharts.chart('pie_container', {
        chart: {
            type: 'variablepie'
        },
        title: {
            text: all_data[name][0],
            style:{
                fontFamily: 'Libre Baskerville',
                fontSize :25
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: 'Number of Current Employee at {point.name} : <b>{point.y}</b><br/>' + 
            'Percentage: {point.percentage:.1f} %' 
        },
        plotOptions: {
            variablepie:{
                allowPointSelect: true,
            }
        },
        series: [all_data[name][1]]
    });
}

function init(){
    school_pie_draw('Wharton');
}

document.addEventListener('DOMContentLoaded', function () {

    Highcharts.chart('parliament_container', {

        chart: {
            type: 'item'
        },
    
        title: {
            text: 'Current Empolyee Data Distribution over Business School Graduates (In Hundreds)',
            style:{
                fontFamily: 'Libre Baskerville',
                fontSize :25
            }
        },

        legend: {
            enabled:false
        },
    
        series: [{
            name: 'Count (In Hundreds) ',
            keys: ['name', 'y', 'color', 'label', 'count'],
            data: [
                ['Wharton Business School', 19, "#576675", 'Wharton'],
                ['Harvard Business School', 17, "#5c87ab", 'HBS'],
                ['Stanford Graduate School of Business', 5, "#629a88", 'Standford GSB'],
                ['Kellogg School of Management', 12, "#bac97e", 'Kellogg'],
                ['Booth School of Business', 9, "#f0e5b2", 'Booth'],
                ['Columbia Business School', 9, "#e7c59a", 'CBS'],
                ['Sloan School of Management', 6, "#bf7777", 'Sloan']
            ],
            dataLabels: {
                enabled: true,
                format: '{point.label}'
            },
    
            // Circular options
            center: ['50%', '88%'],
            size: '170%',
            startAngle: -100,
            endAngle: 100
        }]
    });
});

var sanky_data = [];
var all_school = ["Wharton", 'HBS','Standford GSB','Kellogg','Booth','CBS','Sloan'];
var all_com = ['Bain', 'BCG', 'Mckinsey'];
for (let i = 0; i<all_school.length;i++){
    for (let j = 0; j< 3;j++){
        temp = [all_school[i],all_com[j], all_data[all_school[i]][1].data[j].y]
        sanky_data.push(temp)
    }
    
    
}

document.addEventListener('DOMContentLoaded', function () {

    Highcharts.chart('sanky_container', {

        title: {
            text: 'Business School Graduates Flow',
            style:{
                fontFamily: 'Libre Baskerville',
                fontSize :25
            }
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
            }
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: sanky_data,
            type: 'sankey',
            name: ''
        }]
    
    });
});


document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('firm-barchart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'The Distribution of the Business School Graduates in Top 3 Consulting Companies',
            style:{
                fontFamily: 'Libre Baskerville',
                fontSize :25
            }
        },
        xAxis: {
            categories: ['Mckinsey', 'Bain', 'BCG'],
            title:{
                text:"Top 3 Consulting Companies"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Business School Graduates'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: false
        },

        plotOptions: {
            column: {
                stacking: 'number'
            },
            series: {
                pointWidth: 80
            }
        },
        series: [{
            name: "Wharton Business School",
            data: [750,479, 653],
            color:"#576675"
        }, {
            name: "Harvard Business School",
            data: [765,457, 518],
            color:"#5c87ab"
        },
        {
            name: "Standford Graduate School of Business",
            data: [254,140, 167],
            color:"#629a88"
        },
        {
            name: "Kellogg School of Management",
            data: [465,450, 327],
            color:"#bac97e"
        },
        {
            name: "Booth School of Business",
            data: [434,189, 302],
            color:"#f0e5b2"
        },{
            name: "Columbia Business School",
            data: [474,167, 260],
            color:"#e7c59a"
        },{
            name: "Sloan School of Management",
            data: [294,149,214],
            color:"#bf7777"
        },

    ]
    });
});


var all_data = {'Wharton' :["Wharton Business School",{minPointSize: 10,
    innerSize: '20%',
    zMin: 0,data: [
                    {name:"Bain",
                    y:479,
                    z:125,
                    color:'#F5B7B1'
                    },
                    {name:"BCG",
                    y:653,
                    z:200,
                    color:'#76D7C4'
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
                            color:'red'
                        },
                        {name:"BCG",
                            y:518,
                            z:200
                        },
                        {name:'Mckinsey',
                            y:765,
                            z: 275},
                        ]}],
                'GSB': ['Stanford Graduate School of Business' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:140,
                            z:125
                        },
                        {name:"BCG",
                            y:167,
                            z:200
                        },
                        {name:'Mckinsey',
                            y:254,
                            z: 275},
                        ]}],
                'Kellogg': ['Kellogg School of Management' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:450,
                            z:200
                        },
                        {name:"BCG",
                            y:327,
                            z:125
                        },
                        {name:'Mckinsey',
                            y:465,
                            z: 275},
                        ]}],
                'Booth': ['Booth School of Business' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:189,
                            z:125
                        },
                        {name:"BCG",
                            y:302,
                            z:200
                        },
                        {name:'Mckinsey',
                            y:434,
                            z: 275},
                        ]}],
                'CBS': ['Columbia Business School' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:167,
                            z:125
                        },
                        {name:"BCG",
                            y:260,
                            z:200
                        },
                        {name:'Mckinsey',
                            y:474,
                            z: 275},
                        ]}],
                'Sloan': ['Sloan School of Management' ,{minPointSize: 10,
                    innerSize: '20%',
                    zMin: 0,
                    data: [
                        {name:"Bain",
                            y:149,
                            z:125
                        },
                        {name:"BCG",
                            y:214,
                            z:200
                        },
                        {name:'Mckinsey',
                            y:294,
                            z: 275},
                        ]}],
            };

function school_pie_draw(name){
    Highcharts.chart('pie_container', {
        chart: {
            type: 'variablepie'
        },
        title: {
            text: all_data[name][0]
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
            text: 'Current Empolyee Data Distribution over Business School Graduates (In Hundreds)'
        },

        legend: {
            enabled:false
        },
    
        series: [{
            name: 'Count (In Hundreds) ',
            keys: ['name', 'y', 'color', 'label', 'count'],
            data: [
                ['Wharton Business School', 19, "#576675", 'Wharton'],
                ['Harvard Business School', 17, "#869ca3", 'HBS'],
                ['Stanford Graduate School of Business', 5, "#86b2b1", 'GSB'],
                ['Kellogg School of Management', 12, "#a0bfab", 'Kellogg'],
                ['Booth School of Business', 12, "#ddecc5", 'Booth'],
                ['Columbia Business School', 9, "#f0e5b2", 'CBS'],
                ['Sloan School of Management', 6, "#f2bab8", 'Sloan']
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
var all_school = ["Wharton", 'HBS','GSB','Kellogg','Booth','CBS','Sloan'];
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
            text: 'Graudate School to Companies'
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
        }],
        nodes: [{
            id: "Wharton",
            colorIndex: 0
        },
        {
            id: 'HBS',
            colorIndex: 1
        },
        {
            id: 'GSB',
            colorIndex: 2
        },
        {
            id: 'Kellogg',
            colorIndex: 3
        },
        {
            id: 'Booth',
            colorIndex: 4
        },
        {
            id: 'CBS',
            colorIndex: 5
        },
        {
            id: 'Sloan',
            colorIndex: 6
        }]
    
    });
});


document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('firm-barchart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'The Distribution of the Business School Graduates in Top 3 Consulting Companies'
        },
        xAxis: {
            categories: ['Mckinsey', 'Bain', 'BCG'],
            title:{text:"Top 3 Consulting Companies"
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
                stacking: 'percent'
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
            color:"#869ca3"
        },
        {
            name: "Standford Graduate School of Business",
            data: [254,140, 167],
            color:"#86b2b1"
        },
        {
            name: "Kellogg School of Management",
            data: [465,450, 327],
            color:"#a0bfab"
        },
        {
            name: "Booth School of Business",
            data: [434,189, 302],
            color:"#ddecc5"
        },{
            name: "Columbia Business School",
            data: [474,167, 260],
            color:"#f0e5b2"
        },{
            name: "Sloan School of Management",
            data: [294,149,214],
            color:"#f2bab8"
        },

    ]
    });
});
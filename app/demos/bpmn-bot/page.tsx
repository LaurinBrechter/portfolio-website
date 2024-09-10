"use client";
// import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';
// import BpmnViewer from 'bpmn-js/lib/Viewer';
// import { BpmnVisualization } from 'bpmn-visualization';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
var jsdom = require("jsdom");
const { JSDOM } = require("jsdom");
const myJSDom = new JSDOM(html);
const $ = require('jquery')(myJSDom.window);
import { debounce } from 'min-dash';


// async function openDiagram(xml:string) {

//     try {

//       await bpmnModeler.importXML(xml);

//       container
//         .removeClass('with-error')
//         .addClass('with-diagram');
//     } catch (err) {

//       container
//         .removeClass('with-diagram')
//         .addClass('with-error');

//       container.find('.error pre').text(err.message);

//       console.error(err);
//     }
//   }


export default function BPMN() {

    window.$ = window.jQuery = require('jquery')

    const xml = `<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
        xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
        xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
        id="Definitions_1"
        targetNamespace="http://bpmn.io/schema/bpmn"
        exporter="Camunda Modeler"
        exporterVersion="4.8.0">
<bpmn:process id="Process_1" isExecutable="true">
<bpmn:startEvent id="StartEvent_1"/>
<bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_1"/>
<bpmn:task id="Task_1" name="Task 1">
<bpmn:incoming>Flow_1</bpmn:incoming>
<bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:task>
<bpmn:sequenceFlow id="Flow_2" sourceRef="Task_1" targetRef="EndEvent_1"/>
<bpmn:endEvent id="EndEvent_1">
<bpmn:incoming>Flow_2</bpmn:incoming>
</bpmn:endEvent>
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
<dc:Bounds x="173" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Task_1_di" bpmnElement="Task_1">
<dc:Bounds x="290" y="80" width="100" height="80"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="EndEvent_1_di" bpmnElement="EndEvent_1">
<dc:Bounds x="475" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
<di:waypoint x="209" y="120"/>
<di:waypoint x="290" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
<di:waypoint x="390" y="120"/>
<di:waypoint x="475" y="120"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`; // my BPMN 2.0 xml


    // const bpmnVisualization = new BpmnVisualization({ container: 'body' });
    // bpmnVisualization.load(xml);

    var container = $('#js-drop-zone');
    var canvas = $('#js-canvas');

    var bpmnModeler = new BpmnModeler({
        container: canvas,
        propertiesPanel: {
            parent: '#js-properties-panel'
        },
        additionalModules: [
            BpmnPropertiesPanelModule,
            BpmnPropertiesProviderModule
        ]
    });
    container.removeClass('with-diagram');


    return <div></div>


}


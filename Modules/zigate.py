
import Domoticz
from Modules.output import sendZigateCmd

def initLODZigate( self, nwkid, ieee ):

    Domoticz.Status("Initialize Zigate Data Structure %s %s" %(nwkid, ieee))
    self.IEEE2NWK[ieee] = nwkid
    self.ListOfDevices[nwkid] = {}
    self.ListOfDevices[nwkid]['Version'] = '3'
    self.ListOfDevices[nwkid]['ZDeviceName'] = 'Zigate'
    self.ListOfDevices[nwkid]['IEEE'] = ieee
    self.ListOfDevices[nwkid]['Ep'] = {}
    self.ListOfDevices[nwkid]['PowerSource'] = 'Main'
    self.ListOfDevices[nwkid]['LogicalType'] = 'Coordinator'

    endpointZigate( self, ieee)


def endpointZigate( self, zigate_ieee):

    if '0000' not in self.ListOfDevices:
        return
    sendZigateCmd(self, '0045', '0000')

def epDescrZigate( self, ep):

    if '0000' not in self.ListOfDevices:
        return
    sendZigateCmd(self,"0043", '0000' + ep)

def receiveZigateEpList( self, ep_count, ep_list):

    if '0000' not in self.ListOfDevices:
        return
    i = 0
    while i < 2 * int(ep_count,16) :
        tmpEp = ep_list[i:i+2]
        if tmpEp in self.ListOfDevices['0000']['Ep']:
            return
        self.ListOfDevices['0000']['Ep'][tmpEp] = {}
        epDescrZigate( self, tmpEp)
        i += 2

def receiveZigateEpDescriptor( self, MsgData):

    MsgDataSQN=MsgData[0:2]
    MsgDataStatus=MsgData[2:4]
    MsgDataShAddr=MsgData[4:8]
    MsgDataLenght=MsgData[8:10]
    if int(MsgDataLenght,16) == 0 : return
    MsgDataEp=MsgData[10:12]
    MsgDataProfile=MsgData[12:16]
    MsgDataDeviceId=MsgData[16:20]
    MsgDataBField=MsgData[20:22]
    MsgDataInClusterCount=MsgData[22:24]

    idx = 24
    i=1
    if int(MsgDataInClusterCount,16)>0 :
        while i <= int(MsgDataInClusterCount,16) :
            MsgDataCluster=MsgData[idx+((i-1)*4):idx+(i*4)]
            if MsgDataCluster not in self.ListOfDevices[MsgDataShAddr]['Ep'][MsgDataEp] :
                self.ListOfDevices[MsgDataShAddr]['Ep'][MsgDataEp][MsgDataCluster]={}
            MsgDataCluster=""
            i=i+1
    # Decoding Cluster Out
    idx = 24 + int(MsgDataInClusterCount,16) *4
    MsgDataOutClusterCount=MsgData[idx:idx+2]
    idx += 2
    i=1
    if int(MsgDataOutClusterCount,16)>0 :
        while i <= int(MsgDataOutClusterCount,16) :
            MsgDataCluster=MsgData[idx+((i-1)*4):idx+(i*4)]
            if MsgDataCluster not in self.ListOfDevices[MsgDataShAddr]['Ep'][MsgDataEp] :
                self.ListOfDevices[MsgDataShAddr]['Ep'][MsgDataEp][MsgDataCluster]={}
            MsgDataCluster=""
            i=i+1


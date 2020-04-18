

import Domoticz

from Modules.schneider_wiser import callbackDeviceAwake_Schneider
from Modules.legrand_netatmo import callbackDeviceAwake_Legrand
from Modules.bindings import callBackForWebBindIfNeeded


def callbackDeviceAwake(self, nwkid, endpoint, cluster):

    """
    This is fonction is call when receiving a message from a Manufacturer battery based device.
    The function is called after processing the readCluster part

    and will call the manufacturer specific one if needed and if existing
    """

    CALLBACK_TABLE = {
        # Manuf : ( callbackDeviceAwake_xxxxx function )
        '105e' : callbackDeviceAwake_Schneider ,
        '1021' : callbackDeviceAwake_Legrand ,
        }


    #Domoticz.Log("callbackDeviceAwake - nwkid: %s ep: %s cluster: %s" \
    #        %(nwkid, endpoint, cluster))

    if nwkid not in self.ListOfDevices:
        return

    # Let's check if any WebBind have to be established
    callBackForWebBindIfNeeded( self, nwkid )

    # Let's checkfor the Manuf Specific callBacks
    if 'Manufacturer' not in self.ListOfDevices[nwkid]:
        return

    if self.ListOfDevices[nwkid]['Manufacturer'] in CALLBACK_TABLE:
        manuf = self.ListOfDevices[nwkid]['Manufacturer']
        func = CALLBACK_TABLE[ manuf ]
        func( self, nwkid , endpoint, cluster)


    return
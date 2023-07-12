// DeviceUtils.js
import { Device, Constants } from 'expo';

export function getDeviceModel() {
  if (Constants.platform.ios) {
    return Device.modelName;
  } else {
    // Handle Android or other platforms
    // You can use Constants.platform.android.model for Android devices
    // or provide a default value for other platforms
    // For example:
    return 'Unknown';
  }
}

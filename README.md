
# Patching AmsiScanBuffer

Bypass amsi detection by patching AmsiScanBuffer using FRIDA




## Installation

Install frida using pip

```powershell
  pip install frida frida-tools
```
    
## Usage

```powershell
frida-ps | Select-String "powershell" # Get your powershell PID to use it in the next command
frida -p [PID] -l Bypass-amsi.js
```
And that's it amsi will never detect the powershell process that's FRIDA is attached to.

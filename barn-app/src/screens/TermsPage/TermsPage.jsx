import React from "react";

export default function TermsPage() {
  return (
    <div className="terms-container">
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n/*! \n * Base CSS for pdf2htmlEX\n * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> \n * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE\n */#sidebar{position:absolute;top:0;left:0;bottom:0;width:250px;padding:0;margin:0;overflow:auto}#page-container{position:absolute;top:0;left:0;margin:0;padding:0;border:0}@media screen{#sidebar.opened+#page-container{left:250px}#page-container{bottom:0;right:0;overflow:auto}.loading-indicator{display:none}.loading-indicator.active{display:block;position:absolute;width:64px;height:64px;top:50%;left:50%;margin-top:-32px;margin-left:-32px}.loading-indicator img{position:absolute;top:0;left:0;bottom:0;right:0}}@media print{@page{margin:0}html{margin:0}body{margin:0;-webkit-print-color-adjust:exact}#sidebar{display:none}#page-container{width:auto;height:auto;overflow:visible;background-color:transparent}.d{display:none}}.pf{position:relative;background-color:white;overflow:hidden;margin:0;border:0}.pc{position:absolute;border:0;padding:0;margin:0;top:0;left:0;width:100%;height:100%;overflow:hidden;display:block;transform-origin:0 0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0}.pc.opened{display:block}.bf{position:absolute;border:0;margin:0;top:0;bottom:0;width:100%;height:100%;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.bi{position:absolute;border:0;margin:0;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}@media print{.pf{margin:0;box-shadow:none;page-break-after:always;page-break-inside:avoid}@-moz-document url-prefix(){.pf{overflow:visible;border:1px solid #fff}.pc{overflow:visible}}}.c{position:absolute;border:0;padding:0;margin:0;overflow:hidden;display:block}.t{position:absolute;white-space:pre;font-size:1px;transform-origin:0 100%;-ms-transform-origin:0 100%;-webkit-transform-origin:0 100%;unicode-bidi:bidi-override;-moz-font-feature-settings:\"liga\" 0}.t:after{content:''}.t:before{content:'';display:inline-block}.t span{position:relative;unicode-bidi:bidi-override}._{display:inline-block;color:transparent;z-index:-1}::selection{background:rgba(127,255,255,0.4)}::-moz-selection{background:rgba(127,255,255,0.4)}.pi{display:none}.d{position:absolute;transform-origin:0 100%;-ms-transform-origin:0 100%;-webkit-transform-origin:0 100%}.it{border:0;background-color:rgba(255,255,255,0.0)}.ir:hover{cursor:pointer}",
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n/*! \n * Fancy styles for pdf2htmlEX\n * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> \n * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE\n */@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes swing{0{transform:rotate(0)}10%{transform:rotate(0)}90%{transform:rotate(720deg)}100%{transform:rotate(720deg)}}@-webkit-keyframes swing{0{-webkit-transform:rotate(0)}10%{-webkit-transform:rotate(0)}90%{-webkit-transform:rotate(720deg)}100%{-webkit-transform:rotate(720deg)}}@media screen{#sidebar{background-color:#2f3236;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")}#outline{font-family:Georgia,Times,"Times New Roman",serif;font-size:13px;margin:2em 1em}#outline ul{padding:0}#outline li{list-style-type:none;margin:1em 0}#outline li>ul{margin-left:1em}#outline a,#outline a:visited,#outline a:hover,#outline a:active{line-height:1.2;color:#e8e8e8;text-overflow:ellipsis;white-space:nowrap;text-decoration:none;display:block;overflow:hidden;outline:0}#outline a:hover{color:#0cf}#page-container{background-color:#9e9e9e;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");-webkit-transition:left 500ms;transition:left 500ms}.pf{margin:13px auto;box-shadow:1px 1px 3px 1px #333;border-collapse:separate}.pc.opened{-webkit-animation:fadein 100ms;animation:fadein 100ms}.loading-indicator.active{-webkit-animation:swing 1.5s ease-in-out .01s infinite alternate none;animation:swing 1.5s ease-in-out .01s infinite alternate none}.checked{background:no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)}}',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.ff0{font-family:sans-serif;visibility:hidden;}\n@font-face{font-family:ff1;src:url('data:application/font-woff;base64,d09GRgABAAAAADNoABAAAAAAWMwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAzTAAAABwAAAAcGU59xUdERUYAADMwAAAAHAAAAB4AJwBaT1MvMgAAAeAAAABHAAAAVmL9IuRjbWFwAAADFAAAAOgAAAGivP1fMGN2dCAAAAt8AAAAKwAAADQYVgZKZnBnbQAAA/wAAAbwAAAOFZ42EcpnYXNwAAAzKAAAAAgAAAAIAAAAEGdseWYAAAxUAAAk/QAAQPT7uDJ0aGVhZAAAAWwAAAAxAAAANqSrBvNoaGVhAAABoAAAACAAAAAkDTMGfmhtdHgAAAIoAAAA7AAAAVBczh6hbG9jYQAAC6gAAACqAAAAqpnMiGptYXhwAAABwAAAACAAAAAgAWYCa25hbWUAADFUAAABIgAAAjoBouCVcG9zdAAAMngAAACvAAAA4w7EQ6RwcmVwAAAK7AAAAI8AAACnaEbInHicY2BkAIPIE6JR8fw2XxnkOcD8eN9+MH3vgd61/7f+WbMXsj4FcjkYmECiAC1DC9MAAAB4nGNgZGBgffrPmoGBQ/7/rf/n2QsZgCIoIAQAoKMGwAABAAAAVABLAAMAAAAAAAIAGAA8AI0AAABpAeIAAAAAeJxjYGTuYJzAwMrAwGrMOpOBgVEOQjNfZ0hjEmJgYGJgZWYAgwagpAMDAgSkuaYAKYXfTKxP/1kD9T9lPArkM4LkALqjC10AeJwtkLFqAkEURa+bXQ2kE0KaVQkhjZ1goagQFosEUSSQQFIJ+QTB2mIbi6STNNukSDPNNn5CYEnhD9jJtvkDCz0z2YHDvTPvvjfMeH8aiuUZ6ErBs17wHzA8q2nCmcE/oamt+3PdwU+hLWhDBGMYFf6BbG7BJ+cN7Zlbh88g0yt841M/V1ru6o39F9lfX7qx+bJxuYTa1OacZtrgZ/Rc4w2+XXnXLdqk5xEW9PfQDtwzL0QHEJcyy3FHfYlfMT+259BzfXP1eeOKekTfFfsl/oJ7qlbhEnjn8fA/y/3JxLHVmlpoCaqKTvSjR6V4nGNgYGBmgGAZBkYGEJgD5DGC+SwMDWBaACjCw6DAoMagxWDN4MUQzhDJUKUgrCCpIKug9Jvp/3+gKpCsBoMOgz2DD1A2ESgroSADlGX8////4//3/t/9f+f/zf83/l//f+GBxQOTB0YP9FgDoDbiBIxsDHAljExAggldAcTpDECnsrKxM3BwcnHz8PLxCwgKCYuIiokDJSQkpaRlZOXkFRSVlBlUVNXUNTS1tHV09fQZDKBmGBoZm5iamVtYWlnb2NrZOzg6Obu4url7eHrhdxwyCCBeqTeDn7+PL4wXGERIPQDyqC4oeJytV2tbG8cVntUNjAEDkrCbdd1RxqIuO5JJ6zjEVhyyy6I4SlKBcbvrNO0uEu79kvRGr+n9ovyZs6J96nzLT8t7ZlYKOOA+fZ7yQeedmXfmXOfMQkJLEg+jMJay90Qs7vao8uBRRLdcuhEnj+XoYUSFZvrRrJgVg4E6cBsNEjGJQG2PhSOCxG+Ro0kmj1tU0KqhGi0qajk8Ltbqwg+oGsgk8bNCLfCzZjGgQrB/JGleAQTpkEr9o3GhUMAx1Di82uDZ8WLd8a9KQOWPq04Va4pEPzqMx6tOwSgsaSp6VA8i1kerQZATXDmU9HGfSmuPxjechSAchFQJowYVm/HeOxHI7iiS1O9jagts2mS0Gccys2xYdANT+UjSBq9vMPPjfiQRjVEqaa4fJZiRvDbH6Daj24mbxHHsIlo0HwxI7EUkekxuYOz26Bqja730yZIYMONJWRzE8TCNyfHiOPcglkP4o/y4RWUtYUGpmcKnmaAf0YzyaVb5yAC2JC2qmHAjEnKYzRz4khfZXdeaz7/ghQMqrzewGMiRHEFXtlFuIkK7UdJ30704UnEjlrT1IMKay3HJTWnRjKYLgTcWBZvmWQyVr1Auyk+pcPCYnAEU0Mx6iy5oydYuwq2SOJB8Am0lMVOSbWPtnB5fWBRB6K83poVzUZ8upHl7iuPBhACuJzIcqZSTaoItXE4ISRdGTqxEalW6bVUsnLOdrmOXcD917eSmRW0cOl6YF8UQWlzViNdRxJd0ViiENEy3W7SkQZWSLgVv8AEAyBAt8WgPoyWTr2UctGSCIhGDATTTcpDIUSJpGWFr0Yru7UdZabgdX6eFQ3XUoqru7Ua9B3bSbWC+auZrOhMrwcMoW1lBClOflj2+cigtP7vEP0v4IWcVuSg2+1HG4YO//ggZhtql9YbCtgl27TpvwU3mmRiedGF/F7Onk3VOCjMhqgrxCkjcGzuOY7JV1yIThXA/ohXly5AWUX4LUJygFGuYSWDDf65cccSyqArf9zkSNRiCtaw269GHnvs84rYKZ+teiy7rzGF5BYFn+TmdFVk+p7MSS1dnZZZXdVZh+XmdzbC8prNZll/Q2QWWnlaTRFAlQciVbJPzLl+bFukTi6vTxffsYuvE4tp08X27KLWgS955DrOv/7a+sqMn/WvAPwm7nod/LBX8Y3kd/rFswj+Wa/CP5RfhH8sb8I/ll+Afy3X4x7KtZcdU7k0NtVcSGbAJgcktbmObi3dD002PbuJivoA70ZXnpFWlm4o7/DMZLnv/5Umus8VKyKVHL6xnZaceRuiO7OVXToTnPM4tLV80lr+I0ywn/KxO3N8zbeF5sfovwX/b99Rmdsups6+3EQ84cLb9uDXpZote0u3LnRZt/jcqKnwA+stIkVhtyrbscm9AaO+PRl3VRTOJ8AKi/eJp2nSceg0RvoMmtkqXQSuhrzYNLZsXPl0MvMNRW0nZGeHMu6dpsm3PowpuQ86WlHBz2dqNjkuyLN3j0lr5udjnljuH7q3MDrWTUCV4+t4m3Pbs81QKkqGiMl5XLJeC1AVOuOU9vSeFaXgI1A5yrKBhh5+uucBowXlnKFG2uVZwiZGMMgqu/JlTcSIb0WQjivjNW+qnulAInUksJGbLa3ksVAdhemW6RHNmfUd1WSln8d40hOyMjTSJ/agtO3jZ2fp8UrJdeSqo0sTo/smPGJvEs6o9z5bikn/1hCXBJF0Jf+k87fIkxVvoH22O4g5dDqK+i8dVduJ2tuHUcG9fO7W65/ZPrfpn7n3WjkDTHe9ZCrc13fVGsI1rDE6dS0VC27SBHaFxmetzzUY+xZeab13nAlW4Pm3cPHv+js7m8OhMtvyPJd39f1Ux+8R9rKPQqk7USyPO7eyiAd/xJlF5HaO7XkPlccm9mYbgPkJQt9cenyW44dU23cYtf+Oc+R6Oc2pVegn4TU0vQ7zFUQwRbrmDF3gSrbc1FzS9BfhVPRZiB6AP4DDY1WPHzOwBmJkHzOkC7DOHwUPmMPgacxh8XR+jFwZAEZBjUKyPHTv3CMjOvcM8h9E3mGfQu8wz6JvMM+hbrDMESFgng5R1MjhgnQwGzHkdYMgcBofMYfCYOQy+bezaBvqOsYvRd41djL5n7GL0fWMXox8Yuxj90NjF6EfGLkY/Row70wT+xIxoC/A9C18DfJ+DbkY+Rj/FW5tzfmYhc35uOE7O+QU2vzI99ZdmZHYcWcg7fmUh03+Nc3LCbyxkwm8tZMLvwL03Pe/3ZmToH1jI9D9YyPQ/YmdO+JOFTPizhUz4C7ivTs/7qxkZ+t8sZPrfLWT6P7AzJ/zTQiaMLGTCh3p80XziUsUdlwrFEP89oQ3Gvkezh1S83j+aPNatTwC4CgP0eJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxnYnTaJMzJogRibeTgYuSAsETYwi8NpF7MDAyMDN5DN6bSLAcLeycDMwOCyUYWxIzBig0NHBIif4rJRA8TfwcEAEWBwiZTeqA4S2sXRwMDI4tCRHAKTAIHNfGyMfFo7GP+3bmDp3cjE4LKZNYWNwcUFAKtGKvUAeJxjYMACdgHhHIY5rHsZGFgPsegzMPwLZb30/ybrJRa//7f+eQIArIEMtAAAAAAqACoAKgAqASYBXAGQAcAB9AIOAjACUgK+AwgDfAQkBIQFSAYOBlIG6Ad+B74IEgh0CVoJngoWCpgK6gsuC2YL5AwcDD4MgAyoDOwNJA2GDc4OQg60DzQPZg+wD+IQJBBaEUgSJBNEE84UfBTgFeQWPBZ8FsgXFhc4F7wYPBimGYoadhriG3gb4Bx0HLAc+h1EHaYeBB4eHkgebh6wHugfDB+8IE4gegAAeJyVfAlA1NX2/733u7EMw+wz7AwzDAgiyKrhMqKCG4ia0ViJiEtYlluapUa5lGVW7qmltqi5hBrIM6LXX/OZ5SutZxaZrfasXvXq17MC5vI/935nhgGtjPfUL9977r3nnnuWzzn3fkMEDUGITJHGIwEpKM2dghASCBKmI4IxqUCE4EoRnvBohBRZEoFM0EuyNT1Hb9cn2/X2ISSROvEmeqs0vnXvEPGfrD/ydFyQUqUmFIFsqBBf59YVJusjRAFlZbh0IhbIqJEHwspvdCcCMamCObSlSBDESiSKkaUyxliqQpJklspiRh7Q/CmdjdPprnE80zWOZ73G8VKvaTx3DEhFlARxOrxGEpamBrqgMg//cRu02ryczF5pPRLitDatNVlRrOmoID8v1+VIUmSzyWI15BdgmT/mEFdebn5OtsVsUmQFD8AFOTLJw44UaHYkQVtBfgHZ7Sy8Yfid6ZbBZYO2p9P6R9OL9la9N/C1HU/u8+TegzUx5vC9+mlYuvTw2CELtlw8PXXAC8LxtCHjBk0c4croP8vT3jptIF4/MXvk7XctERLXDFnd9OLCR2cMGENfKx9d8ij1RtFjuz09hv2yZdesIdNgOQij1XQiqZLOIhOKcltAgbCuFN4bURn8bUImmwBLwkSR9TqrxejohVNcKa48XUG+kUx8KrNkTPbahWuKe/SxhN9S2CSdpe88/hH9jF747zr6zZdLbl+3u2I0Tv33WpyszjUE5rLCXEY2F7zRlbIJjbiMz2jkcxkNBfl6XYpLyInH1nhs1imyULKtVzGbafMgV1aPiYUv04k4f/U5bMf2/67Dlstzpy7+eTb94NJ6ekGdp0yYTV6XmpEWOdyJEZrwsNAQZggCwRFoOGwmNLAptUhLFEs6NhdYFauSoqQUpBRY8/DRltSWB6uXLpu28nzqB1LzJ6PuLHml5Ngx+OvOss/4+HvoaVyLWmCA3AYts6/hqlKFIxi8EkgiEeiPDigRrvC9w2i0p15vJYot3ZrPVSTFkZdjNsnKnqGxkZjMfH/S/DOa8RlpSrjS8uaCejP0GI8vkJFkI0xgc5sRG6iCzV8JTXi0XsfGMtrN9vH4Mg0jG49w3urgL8abgDL8TKldcCTmTHUbBpjiAxXkmB11Z860tDCuQdFngPwElNo5BhiKb4xw1nEFF2CZvzvOwQ787ibaa5PU3DoYEeTu+FCMlTaBKGLRrJEHYmAUK3NNVeCasLZUwoKAqmAMM/KbpBlaEBEwqenS6I4Jfg+uyuNvFtAYZoM6WJMuVhdjMcFkWpfMbNBq0esUYk9McelzCwx2Q74+lziSiN5kteQI7kWTKpbQzyldUjNwPs57eOfd+7etzRz2orTp4kF6ip7/O/3+0yZc+HMdLm69+Cse+zMupGfpxx8tfwsW/jrI5qy0BoWgGQ3gZBEepToek8B+ARdcGywrdWVd2jr3IiroNem6KR4u8hAUojeJbJfzmLvQO/SvH9vsWv2acPlho2dn6x3CZVXf3QiJ8dJTKAnNH3kgASaMg5cCwkLtVbyc6OcqJkBEYBCCaoJJwEFe0SqKQoWPRhCBx0Z9jMPYQ1Ji0vMNA3F+wO8pDni2ZxuYo4tk3k8BJR2x/P+9dn/u2A2Lj5S4xEah6C6cevmLhcUNKyf3mRItaNt7HMGGWXeOzBt32+K1q0Yub5p/ml5+dt89JVNH5feumLGHr7M36FS0tBn1Rq+6w/RYkMAz8cgUB8vphcDCwV9zYRJmBAKwLpAaWJFchWSZb4pSFYIVxaz4hdDzil4yOH1ZrAn0Du7j7v3n5IqCPf5OWGEaCvoJLGc5jMnZQxyGUCUuXSR5ORZQxWxVZLKSF49zsoMEmMsEqEYK8IEm5MCWi69oUosbV+9r2GFINsa6LFMHzdk0tX6oSzrkvgObP/pvSc/i2ffRn35NwdY3Hhk4e9Pd6+ZjvE0giX0ev23e3UX3bJ/1xrEjy8bmxCUcrP0npbAAlAt6kylthacIVHtYhgURps5Mg6yCTBAYnoTwdK4/CpakyED47NYsVfqb3bEwmkQqrtJOJKbXVoHZcITgc8sAT2DWEOaG9aFYb8/DOXrwRHryPM3Db3tXkcc3vfcebiMrvQuohCceEFa3Vz5Fn1H1vqjjPPiYWpSIYxuMMBljnoGKdFiHAkGrFrYANgQt8UdyBPwQCddAb64SZtmPG665i413ifnrs6T+1VncWX9OLcvI4+uD5DEckzBtS0SJTqdeb3A6mLYZu6haCgsZAlhoTrZoNhF7kjPFa1jsvn775sbaW5Znbp1JLnm39c/OKK85jg1t9Ls6+n86PHNzYfypRRueG+YOFYQX6RyX0U6PvUXfPH6K6VFpx0eiQ3oaxaAUHNYQhuXATqQw3wEujnkRSSYSMyexSsGiqC0NwbIsVIFDsQn+XbgmcjMnt/+10Zn0k/3kQAHaI4IAff26EMMu/QGdIMgeP7ksqCI3x8YiFJsS60pKBBlEO5OZlUenI4vZAWgJ4k6nuB1JSK/jEUndDgYMhZLmQzrHoGUbD4UNmHjDjHqsod+epOcHLcaj7n90yc55ddselZ7+bdn4rAn0a9p+U0bqV18eo+/h3rgGh7+Mp7R+/PcH7jixectDR5hNjOQ2XQuhsBjiE+YGzRYf6Q820/34xMrIV8BrljXAP4QFH8ga1NgTiSJNNhZ7sFkG+MecksGYX2DPEzOHXryxIiOu14khl1ZubL8k1T41mNa/1rS5+jzejDd8v7+B5xNFHefAV29F4ciKstG6w9nJMIHfuyTI/pAOtGIVYhumQFTvBtLjkAg8iqgmQN6FyO24WrskCR4/mSAx/2vRaBDKSE+I01g1FoMOWApzhjCUELQHwfuBUoKROhgP3zcnvCsgz62oXfrAvA3THnp+z/L7n12/lTakjb509u1vhrjKPTmV9NIZ+smiewT38pvLV6yYMHWOt/DBFY88vvaBWc+S7enltdu/+vCJFeMyM3rkTdneTH/74oP7jvQG3Rre8YGoh7gG9oNeaFB89sOCWgqoIGZLBB8gw78y6KIk+UM6yLnTILiGB8iDNNbXLYjYnfZHdOCgPT5qxBS8m3rHuJzMrUSnY9WtGLUYNDwv15CTaLSYGeqCZCZYtFgXclvB0PsPu/odnPbOj99fwn0XFI1eSk+820KyD267d9mWh9bjCev7xp/DwytLMXnrGE6lX235mv72Fn3x/E7sevTA01sOrlv1PIel6AvY8XrRznPfm33A0Q+79aUgF6ESVhDJRZINjQYel4XqAA1DXjbEMQ2LTYLAU2bWiwgQoA7r9XqdCMszsjAEf744Az+ivcW7toXPD9j/bzB/JGQs1Q2RQejfDPOSShhLXxqcB/jZYMkAqg7QCJwN4A0gzPQrMgVgw6K3Mja6JAugjpyl4hgtxjPPJuQ+cPbsmYjytGxJ0bS8eduw+VZpTIsqp61gWFbpNLCX6JeTMwBeII4IEE5EkWuSqbQLLLV3J2Ms4eoAtVjmcYca02xJep2sxKYnA0PIwK1FVrTY7MjN7woG8XcnTtC6n88e/65i2aS+h4bMLXdaUu96cJfbKR06fVo8iZXP6mYsq73l/iWP1c0enZQ8qHjy44uGPgBr+KzjrFIoXQSDHYEujjzggjVoesaBay4pJqEA/GL4r4r/V49KkoVkCZQadFsCziUETgG0XQjFwgwUEuJfcWhoWFU4Dgszh/mNJy+4nwL9ELgRBbCc2rnmdzq7s/+sXyiQhoZNDfQPKQOjMmk0mhGa4UOKnC6jMyW5h9OuURLSEYsWzGiyDXlIcEGoyLcnQjIDCJCVCPILmLHBAwJ5WwtyBJC3SY3tyJ4ISTrkN/ZsZ4FVFh3iZ+OGz9l1w6AHN3o3ft5w/me8BU859Xf6wwvVE0Uh75kb7n0SSxumLRez1y6P1BY45jTQV+j3dNnJfc+9hqt34vgFRRPo5nNCUzX9v+WTp+PC+9pvxNIZbMDFX9L6PfTHL2lz5eBwW8TcykOrTuCs+eN20xE5A2wZPb5/7RIOvdBMP2/dc7LGM6F8FdfHeISk/pBTEhSGyiEyIeyPTGYJqwWsWxHLDEWIRJEE5Ar5IKD7FV1aMeieHiF/Qs+wo8ywYzg2QgIq2AWHsPqT75Z/Rswt671N206RCQw5CtWtg/Hf6DAWlzYCHyLwEQbJZSqa3pAAOaWfEwhL/lIaqEylLywx+Ir86DZAAe8B50rVAUrGmlUTjlGqy2YxGcLNGnOogsJwGAe3HNwDFrDrgx4FtredQUaRe2Dy+pLiO+4qeoA+hfc3lvV+bNRietcxsgCTme7RPUpn96n2LKcXvGuFckfBY49nx9K+3gkzBlduvy7B2yYZN9+04BFPZkp6/qQXVs/dp/qBCR0t0mywoTjYgQ0qKHOBWQiQ3YGBEyyQJYhVvWSFSJKJOVAej82BNPFaqG0ij8bdCCEDIOLUIHpcpuLT+HhgJ9ZhdCYZQiB7DMFWRy/MkZGBZUEFOQA3eO7O1N8hxuNc/VH78UMf0v/9+MP5uf3jj0avqaPnOtCLF/e9jEtSpYu0pWn1TvoOPU4p/fsLnicuPdW85Z94Hx56+nMmAwgdUjXsOattFqursgBb3BEzhYMt9QcNt5H/injAUAnYxkZiZLPotJowFIEjJNjQZMYn83I64t9IvUkhsIGnpw6aN6IwOvLDH+m2N8g4nLlr/Y1b6Apv3R5zyp2eR8aVYD3u1bZJMp47Ss9800wPqftUB/76O+AxHGnQGJXHeBYeRB4eIDAwzYOYL4qd2hgTIBCZUld30jGew7Ce/egUlgIA5tf7/uA6MbN9rZDeflZY1HaUJEjN9bRoD9XWwey8fiTugadQNFTlwtaFC+RjgtcIbKwQsOKKdpi8kc/MSgOBmR11Qlv7KXLGm3mCz1jnncLWXd3xobQD9DMJOdB9DRYweb819mTYDuB3LaxOICKfALLqUKIooHkgAqZ+gQQriFwigGjkzm4EyUSeGtSbSceAkMMBs9p5npRkDAMpIbXEqWoi+FGjPQ/45gVavzamCF9t/Kj3cefn+07Rr7/C4gksCTSXLK/Nmlq29E3a9so/33gV97JLX5TPpZ/uWEvfpmdoK238NybPt3/ffGf6iBf+hefg2S2nGRjfAXqZyfd8UADJgEixOJ3wzWaFLq6Ugfe89FXJWwUWhtUdZmHYyKr7rEQEHO84SdpPnvSKJ6Vm7w5S2TqY1HnHwBAnQURr/rCu17mDvroeDOs4efIkL+pxIODo+FCYCWMY/TzbwOoZ9gazF7RsS9Bkf+XOHGgibKunMQpg+7DJYXQwbIPB5QFa7I9zeBQDa9LnCDMLptHPn/+m6bbZ23rHH8eHX57+yksXa2ruXjhz8MvCe5wHhm1GAg8SylJ50PnXQSYhX/SI4MkOmeIrUzaAmAQliovJbN96glxqHwOL+omVS1lMkK18Tdc1RoRB0AlEBC2vFpeKAvENq+WPqJK/J6DoFrPe4FP0UAyy1+fm52EHC8tmvWMjjsM78bM4ulmktxynE6RXpeY2l9jSOliozji9oK2HeC4j/+Pc9qcCmE1K47YXhvoeVthEAUYgGDJOBH901LInVKm+Zoxgg5+RHMwUAcP/t35Lvmr+xBv5KrkOJp4g7mwdLD7fdhNMwXO08o6z0iWwvUiA9bFodMDeWZVWgmzNVCp3qcSaZV6ARVODSGBqt4mVYGNjdTG6aF8RVulWhGUpLzLk6RCzLZPBLohbmtbsep2up/uP7l/3Kp6HY76lP377Jf30F2zWShdbj9HTtLGlA336AR6B0/6Fda3P4IX/g/jSj56g7/xMD0oTO/3mrzyemzo9FqTtRAR0z4xFVQ2f1GxMJ1Zc0Q5K2Wh36J2J6kZyLAtu3YF4mLYDvqoj61//7/sXaPYJofbuorl0Hl61YpfU/PEb+zq8a8Uj1yVQYc7jjJ/yjke4TM2QywHsj4mOspkl0BkIjGQUaM1wf/xhIkRMxmIXGUP8CZIx8kk4wmKxpFggAXM5JbDKZCUFgKBfsGrskRUxnx1g5PvFrEN26fyUL8b+fTbdc3QvF/LypjWOvCW04vbUHVNeu2kQSPx7+g2AJyIu3J+R/2kLHqbKGqS/eukbS6L1UUvuXX8rJvO54M9AfP2F/kOVez3o6t1cV1NQlTvMAMlkNIY44NPXaBaGAKCJ0zsDbcCdRcOTKKy4koQ5ZiMGqSc7YmM0YSEyCsWhCsdPnZgp28pTjXicwDJQqxk8diZ28UaHULLq2Tn9p9HoE2T37pnvzJx8Q4WkCOGGXj+HaUSNMqXvPbTwhBA7a81TfeNpGNnRe6J32e4cx5za49f3KDbZjf1u+N/jvWO8D6trnNRxVrwMe5mJstB0PxoiAmynVKtAZiFIrCYn4Cp2cMizqAB2AjTUnRBaEcChAD1z4GA3WVkwfmaGw9DLwcCQmlWrEJEvKy/XyUpHaiUJEmqrha/bbBKZAhRgHK/kVrfOuvnQyFHPnDg2ZhU2tP0bD26K7H1Ty4HNEwpPv71+zCr61Lf0+y1bBFKKWxaXrUkcsP3unOzkjJ55Nzf+g37yv/kD566bfHt2YlZmUuH0139+d9Uj34vskMcOLIPrh0x7gLp6A+FYiWlsZ9gw8OOgoBZwt24NLFdBCkQnCbwuZvFfb88TT1L9m1QvNde1/iRp65iM90D8ZzHQjCxooDqLEZJPgaUC/tMLM1FPrhjcn+prZKqiRchigZ5mp8kps2n4+Y4aR1TXI7iisB3P6+d5z3tT7zeHr6Cr6Krlw8lgqbl93vYZ2/dP3Casaj9Bf1xDL+OwNThS6MviQS7odj7wJKPrWA0t4IQjwI6DA2YEX7n6ki2ahVMZyXoDq5uFEnYkhnUQAHZ84r30nvdrcMFx4hetgznOSgb5zIYnDSpqDGUH7IFZIiXuAoJ8Pa/dQSakvmczRcBMGqQBl2+QWa0iFOeEsiO4UJjSi8141Ad4FDa30CVn6H669wythbnHi3vZHwgBR9sG8EwsDdZZAk8hYMUFjSFScOSLENSA0xlPGQvqS+DgMDEYfGUSNjHsrjHtEix159fesyemAe4YQI62r/UeIOXCTB5rxnacF0vE4RAdClE/7HBrstMUyN/SwTqYz9DyM3lQIpigFuQrVLEanpWDc0gfsP+M3/KndGr50HWN47Glpv0uHbsKwB+DSv+smpMU6AF5v+ThFIhDTF9/ph3JfiKFpZiAg2r4oNChxj+kr2YPaLRfv/zczIwUV2J8bIzNYmflSSdX5f6g6vwQzdylqDIA5zA/qOfZf4GZlQVSXCm+6kB+gRFr55RVejbYb82eObn3OFw/wKxZes+jhfaw3dIvzzbPv8uarInXp/V03ZJmCS14e9H65pc3PvzOhJ7Ddz5hjpW1EbGZ0/HtIT1tGTePG5U27h9bhg3b5N0YmyQIyzVykcM9bEbDQ+ufM+IvVT85v+OCmCwdRXoUj29whxHA4ZFYEoPvjOhY0sDjmZUdRbK7Fr46JjPuzjsjv09nI8F3Rv5sPNM1jme9xvFSr3E8ph1xMlNqiUztQsqRhk7gaRugeQmLNQG6zlaP72aJ1mAwxBvikk1OByRwDNTp2ZYb9KwUDTttdjgDJVbwefPrCp+b9MZvl1vuuT67704y7YknHr33iKvkqHTU+23pGPod/ZnSA4WO0pWLL736woXDZzZOPAj7VtjxmXBaLEPRKAZ/ru7V72f71m61Ac01Uts4tfYvjf3HVYruYxv+0thxf2nshL809h/XS7qPzXTlT4sm3JX06EbFWhC7lFSDiCgSj29cIo7x+H9YvIyJga2NSjIkq3UWZFHrLOp1JHAbOWrpXodyFPL+F9Y63Zwl+0ZkPbRm1tKouvj/Nr3big3/ihXLDpyrXrp75vYd51cuOHsc53yFo/F1ErP7Ph0twndg9+EoDr3kDjfxol4kRMyRfkMlRFeqrgXz9TOLCYZJfsP6I7pOYcX5MVQXSg4dVcNiBqWKJQC2/K3cqDQaTZwm1qG3Ou3MqAydx6JmyFasLG3KYzJB7Djj8podi3fsvOehF/DD47L6739m4L47X6KtP1zAlZfOnXzr2Ok3SUFu/EgS1zpgffWNOKP1G1wBcW5YR4sYDXEuFjkhxp9TBZGKfBc9QrEMgpPRdIgsYpUSArtnLeVho8s5zrXR2wKHHMlX0oO2YGFqUDeJn2z66NgrCEWiVBPUA3CVxzc25iebbmsciDw5Oc4Z50xKhCXFuIxJljB+tGllGNSuXltgiqTwa2ws68jBKlRVMKl/v0++Qdf+g/T4xkevzzIdVEb3Hrtw0Ng3IOmwfY4TwlNH7F+0W8IOseS28WNuH/HMs8dvyS8pfKJXeawOgIyMCS6irruKH3jpYXweGI8FTq3Su8iK7nOHsTM/mAL7M45YVr1gaZSJJxqkErqzoxj/lZdsTsMLVlcj5HkJb5bZ2XqgosUJeeEyjNVaDDnZrJ5mYOe5kHswc5LN7KQI/peXk9fgGFivd1pjo8LHJh6qP7R+vVSUezMhzxE8/sXV7VOErat3g470p4XCJdCRBJSBeuHZhy0CUWQGvJgn6wEmzWavZYf7VQDK+LmWonBbiCzl+QMwFuW/XTSoF4/B7CCK3aUQELv0w370qFTFo0hCVR0dgPIIPEkgvVIVnAN9lWoogMr4aSK78cPfgSWjKHaTThXcoJ5XmUPhfQkfp+aa5rza+IMyeEeJd2Fda7tPFRiGtSqcsuYq019lcI6sEEpLddhB1vHJDoPTFMocIShvXo5erT6l5PgyLo6enEyBkSvgJAFyYbJoYk7ezn6z6Mn9/9E2RqT0X/qO2yXkb1r8Im3Dyst4yHP3vVqcvHbR0dE96RmxaIBj8IPt2afmt2x5flhKvzU3fDy2/BcchyNwL7rjtUOVmxua66qXkQxgcBlwzfynBU1tIEGVT/VupH+nrYEjEVWJLV0bVOTAILqJGT3Eh5rg1x5PoxHSI19lSM8vIjDg6NDnqgml3rGs3p1T8cDX4zKOxPd+cNbhegAN58fY+z7redo7hjw7v+DGze9732CbAvziQl4/VJCn26Enz9b0nffesrs1Bh+/GvxHiv5m5p6DDl71/OB1WSP8iGlt70vNpzjO7Gih5bgPn1+PxjXoschvN7CZov0nmPyiGz8HFieDvRhZKh7nu5xVG0TU2e5pzDX6atUYTBgPwCx7NPFLuSm4T309fWZh73rXwAMRcQnid6d/yxUdN4uH2wruum4yEdSaKAws/MrruJPdoaFgsiIJnG7p/aVJfSCfU1m2Cv5dUjM9zpmeqAk1/FrR2c40+bAxkHDpWbLnwIreUbsfv/0VnYYPfkUPbdwPSe1efILe6Z1MYh+md6i8rYS/+v/1mu/K+vrOmi/su5wsliAX2nA4jBBBZItjmZhZxiI4EXYVDvZegQTSd/LOJoriCsEocBW752sNJmASiLqiTVURgV8jY6WhCmgDIgGwMrPwSkaE2Ck95NpGp9FhSnbqQpR4dlbvU2yrPzEC/fapd5CiH3LnembXlvV09ntm6gdlaU23lc54sjG6x6xpu+rFzE2jnf0HOotvGLf1+tXeAnLptvLVO71PkKaZ2SOffgcMgKj2Cn47CmDVzoDFslTDyCG8pMqh01wt/OSflfdYvTi4hV+iUy2GWbOEr7Rza7cWVTiExyl2BlkBTaq9M+PglWAymkO/UGx1mhy+YwFzkERS1OxRi+E3vGzvqD23flneszEua4m7x4g+GTH1eBeIYeLYbRXPMMuf3G9KhKUob3aN9x1YNGhQYceHoh3yBQ2ygQzm+aut7K6IKBOWNjNug7KmbPV4l1fipwbRsUJnLHtkuBbVAAUovMffGRN268QUEYFQVFSELcJq1MOU4fx2vdOQ59tOdmkH4AaxA1rjCPbT5VmjXn5+w4Zn38fx7fSXj2k7Nvxbnocjd26YuK790N4vhRb6H0iEvPRFnN4OabVbYrkrHS8mw/K0KAnfyG6VYpQI+Wtn7spBhO/yjJV/IqCiV3YEZZT8uU0sr1UJHHJcjUZ3jWNZ/4jO1kkXc43jpV7jeGyn4hmk4olptw4+Klikb8OCCflxJDT78w5w7kn2uBiLSRcJQo1Qd02t3vKgCsEW+8zVoNcxNwvprN5B/rErufjlpqHJ8DftVZfvvunew7Rx3uaFY7MK6xe+927tzQebpmxeVLFTOLh6eGo/+jXs4zMbKvPih3s/ZrGpHx0PtlkCUybimsNWA1EvGIT5kCGpkiXiW5VfRoJgFPyZ7FVpbJ00umsYx3QN41iuYZwgHQhKdK6kS/0juqA5+d4itdZecwW9SsVuNgTlTj5KfixuDFQlIIOKjIxMjEyADMqVxDOozmK1P4nKY+Fb6z/O/zVl6KFXSlLSh//trl34sZuye+1tyNi2YC/9yXsSL5m460DVxkdu2fbWv8iAwc7i9a0u4ho2HmuwATR0RCB+kTWwr3q0WZVeeCjwBYE/BKMREL/gH8zf8Ps/Fh5xwVf6HC4KDkhm5LsiFlS/ETqxSvD7zkAE7g3cVAXqvK/IhKIGocNGZ47/rhjzsoGEAOLnXvNzt0m2OF2M7qE1EFyO5G8hwqsCqZvj3cQBblHHOeGwOBL1QpnoyT87W7B2S5rVysGfHDBYBV456EYldwYNCN0e37hI9F1Uz8wEjnplOIwZ/DQicHU4cBjBo6xy5WmECpd+CEkesnvKpv4pcx9bOWjeR0d+um0w2SO5Bjw5rWZoatmCo0U1H1744YSCG3H5hKyKipuGOi2QWqYNv3/TK6sn3No/u6TMXZwWZYzL7Dl03WOnP9xOfmM6YO34gYRKEyDq3O8Oi8AC0QIm6Mz7gGK5xBEUWzbfdA7uOvO+KE7D77OJ04JIWTBN4G0yuz7Odng6/87B4xtDEMfyzM/ozPXfpFDvp/ODBl/h1ZXHcr/dh/fudZl7R8SbEganLJnwxBPSBHp2rXdoH2M4JqtDQ+6fTo6vVeultR1fCBcg5lhhRacbtL67UCz5M0FOLvA1AN3kTsDIXIst0AZvuXeeHCgCML23ygx2dmvurClctbmzhGBSU6hp/PNBldQHNUD9PewFUsWj9kTCWNUjRCJks8FKrE69yamwQ/3gQxhHgax6+Dx9Mu4TnbX0lSHJ9XuII3f62ovjMthNFG/fsbmTdk94imjbzjzdP+36J8euJB9Eq7YPUFX4RsyEhK/sKucw3ZKNoMMYPcMX4eyR7TrG8z3dzmaM/LAEn8fxOP04vf01epeY2b5JuLXtDMyGEYQwaQc8adCNVz+b6Y7luxzQ8Nkj+DNByxkhm7/biU0MyYlhPIQDG+fePvPmux/V05NNLe810beAlXphVPsRoaTtjNC//Rgw4pPFZ/AYjsa7Q8N5jtEpD9XZdeUpQs0feBPbSSODYYAa2QtSKfjQ4mFDIK2IwdZQ9QQp/uvLv31EN+KFX9HLlH6JF4qZ9EG8UPK2eT/Ca+gdJFnVYzMdzusYDA1OcmtsZg2IKpyBOR8sNoCZ+n3u5EDRgnGnF3D3Bv4OJBb0DpJXYkl2qclZjiwQhXA/wz+XyS8YgAtAhoJgP+FaOrloa+1WV4/4zDRddqZOGqCl807hBCxmTqdP0P+8SKfVyyHPRch2W8g6p1gGm/2AuoZckGs9rIHduXjIHSax4gEWAiuw8JxRxD7LCbpc7I8oat72RzeP/TSIhxPMP/a6ys1jTyPWG9h5aUx6Abbn2c2YXdbKJfd664UB3pXk4fZa/M5qAe1Y6wXtHI5wRxv+TpzPLt78/veBAowhife2LSe1a9VcTjiKJ0hvoQgU746JYEWTEVf0tPAv+vjdUis4O3aghCcU9GUfKU6ZI80MnVEshystJxc0aVU73SPU41p+vy7KbeFjDg+k2qhMHc4IeXXQN4/qaDNuFw2hM4ayTx5P1r4UwfajTDhK5gF/WhSLXG5HrCFSK4LhjmBnaZglhGxgAXM+Y9Qr0r4PbP2sSl0ZdwyN5Zel51fiMZ1riKhIT2OXpk+u266ZCCzImsCCGA/1wEMz/3YBpGTVhEOEHB6Ymi8qin2ZB3MDkPUvKjnoGT890qYVZ74/eR49MDJKK808O3muaNBO6pvGp5noezrCvsdE65ktCi/DfDZ+1QvxOiyrZWE0xpnEd8OkfiTMyo5k9OJJkxazP+TCpCVLJk1atAhx7w2hULib10djUALqGHkgCtTQVygNwey+NPyi+H7xqM3pfCYFs3JoOA4J8T+rpdFQmYPUMBz84WCPzgIq66FUIkXR/l6HbH4j+5o6+H9hNZsUtQRbwd5AGxGrrzZGCC/xmW22hPi4WFuMLcboq9FqlPjfrdEmww4pEJquqNUSYz38XFmxTTh16kTb+6AXTL7zQL5M0v9UcTokjKKMR+kAr4J04R+JveDStXLYLctqDs++SGLfTrKvk/SlTJciA1++Jqk1KVnmJ86m36FUD55/l8hvbjHuRHgJrYjdfQyQB5MwoWn0plwHvz0YqiSk2x16CEZcPLmdUlPkOEjVHMK8+nrvDyCgtffaUqJAXqOiItXyEEjn1QVzBXEHwT2j+i5fzXAtAMrTvhphlpsVdwE/EHZxEWOhgu05d6cCHg3wE4mKqMgS/y8UyL7/QkEK/CkSV/+t/XM2w9/E0raX0P8HYoE50AAAAHicnZDBagIxEIb/6GpbKMVHCJ4U2WUTEURPWhGh0EMPPfS2SFwXlg1ds/sihb5Cn6jP0mv/1NBDLwUTZufbyT+TmQC4xTsE/BIYYBi4gyvcB+4ixkfgiJqvwD0MxWPgPgbijUoR3TAif7I8d3CHaeAuXvAQOKLmM3APG3EduA8pXrH63WtMsINBiZZfhwJ7ZMDKr/VkZ8rWuGLPyBOPczQUZqj5a/KmzAhbWFRM9L6mwvBijQQp/YL231VnlcaMj6CYFZNT2pSlbeW2ts6N1EkqF/JvUwzpWazSWKea8guGeuZxjRMFfgjJBs6NL2mO+8C0ht7iSI0fU2LEol43pymMWcTUp8JWUrHJpXTukDXOHovKyVGrknmixpf09g17UFrXAAB4nG3OyS5DAQBA0fNeJTSIqahxYaiZ18FQsRJqbJWq2aKLF7Fg5xv8jxg+j0Ys3eTmbq/QL98PYv9x3jQQSkhq16FTl249evVJ6TdgUNqQYSNGjRk3YdKUaRkzZs2Zt2DRkhWRrJy8glVr1m0o2rRlx66SPfsOHDpyrKziRNWpM7XmQ92FS1eu3bh1596bT1/efXgNwiARtLS+PD+WtqPsX3NtlcZTXI6Xox8BfhujAAABAAH//wAPeJxjYGRgYOABYjEgZmJgBMJgIGYB8xgABy8AggAAAAEAAAAA2yC/7gAAAABfTY8AAAAAAN7gLtY=')format(\"woff\");}.ff1{font-family:ff1;line-height:0.958008;font-style:normal;font-weight:normal;visibility:visible;}\n@font-face{font-family:ff2;src:url('data:application/font-woff;base64,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')format(\"woff\");}.ff2{font-family:ff2;line-height:0.717285;font-style:normal;font-weight:normal;visibility:visible;}\n.m0{transform:matrix(0.375000,0.000000,0.000000,0.375000,0,0);-ms-transform:matrix(0.375000,0.000000,0.000000,0.375000,0,0);-webkit-transform:matrix(0.375000,0.000000,0.000000,0.375000,0,0);}\n.m1{transform:matrix(1.500000,0.000000,0.000000,1.500000,0,0);-ms-transform:matrix(1.500000,0.000000,0.000000,1.500000,0,0);-webkit-transform:matrix(1.500000,0.000000,0.000000,1.500000,0,0);}\n.v0{vertical-align:0.000000px;}\n.ls2{letter-spacing:-0.009600px;}\n.ls0{letter-spacing:0.000000px;}\n.ls1{letter-spacing:0.009600px;}\n.sc_{text-shadow:none;}\n.sc0{text-shadow:-0.015em 0 transparent,0 0.015em transparent,0.015em 0 transparent,0 -0.015em  transparent;}\n@media screen and (-webkit-min-device-pixel-ratio:0){\n.sc_{-webkit-text-stroke:0px transparent;}\n.sc0{-webkit-text-stroke:0.015em transparent;text-shadow:none;}\n}\n.ws0{word-spacing:0.000000px;}\n._1{margin-left:-5.232000px;}\n._4{margin-left:-3.686400px;}\n._0{margin-left:-2.529600px;}\n._2{margin-left:-1.507200px;}\n._3{width:1.003200px;}\n._5{width:83.200000px;}\n.fc0{color:rgb(0,0,0);}\n.fs0{font-size:48.000000px;}\n.y0{bottom:-0.750000px;}\n.ya8{bottom:11.639640px;}\n.y55{bottom:14.639640px;}\n.y29{bottom:16.895910px;}\n.y70{bottom:17.639640px;}\n.yda{bottom:23.639640px;}\n.yc4{bottom:26.639640px;}\n.ye0{bottom:29.639640px;}\n.ya7{bottom:32.639640px;}\n.y54{bottom:35.639640px;}\n.y28{bottom:37.895910px;}\n.y6f{bottom:38.639640px;}\n.yd9{bottom:44.639640px;}\n.yc3{bottom:47.639640px;}\n.yb5{bottom:50.639640px;}\n.yc0{bottom:56.639640px;}\n.y27{bottom:58.895910px;}\n.yc7{bottom:59.639640px;}\n.yd8{bottom:65.639640px;}\n.yc2{bottom:68.639700px;}\n.ybf{bottom:77.639700px;}\n.y26{bottom:79.895970px;}\n.yc6{bottom:80.639700px;}\n.ya6{bottom:83.639700px;}\n.y2a{bottom:84.295650px;}\n.y1{bottom:85.039380px;}\n.y53{bottom:86.639700px;}\n.y6e{bottom:89.639700px;}\n.ybe{bottom:98.639700px;}\n.yb4{bottom:101.639700px;}\n.ya5{bottom:104.639700px;}\n.y52{bottom:107.639700px;}\n.y6d{bottom:110.639700px;}\n.ybd{bottom:119.639700px;}\n.yb3{bottom:122.639700px;}\n.y51{bottom:128.639700px;}\n.y25{bottom:130.895970px;}\n.y6c{bottom:131.639700px;}\n.y88{bottom:140.639700px;}\n.yb2{bottom:143.639700px;}\n.y50{bottom:149.639700px;}\n.y24{bottom:151.895970px;}\n.yc1{bottom:152.639700px;}\n.ya4{bottom:155.639700px;}\n.yd7{bottom:158.639700px;}\n.y87{bottom:161.639700px;}\n.ydf{bottom:164.639700px;}\n.y4f{bottom:170.639700px;}\n.y23{bottom:172.895970px;}\n.yc5{bottom:173.639700px;}\n.ya3{bottom:176.639700px;}\n.y6b{bottom:182.639700px;}\n.yde{bottom:185.639700px;}\n.y4e{bottom:191.639700px;}\n.yb1{bottom:194.639700px;}\n.y86{bottom:203.639700px;}\n.ydd{bottom:206.639700px;}\n.yd6{bottom:209.639700px;}\n.y4d{bottom:212.639700px;}\n.yb0{bottom:215.639700px;}\n.y22{bottom:223.895970px;}\n.y85{bottom:224.639700px;}\n.ya2{bottom:227.639700px;}\n.y4c{bottom:233.639700px;}\n.yaf{bottom:236.639700px;}\n.y84{bottom:245.639700px;}\n.y4b{bottom:254.639700px;}\n.ydc{bottom:257.639700px;}\n.yd5{bottom:260.639700px;}\n.y83{bottom:266.639700px;}\n.y21{bottom:274.895970px;}\n.y6a{bottom:275.639700px;}\n.ya1{bottom:278.639700px;}\n.yd4{bottom:281.639700px;}\n.y78{bottom:284.639700px;}\n.y82{bottom:287.639700px;}\n.y20{bottom:295.895970px;}\n.y69{bottom:296.639700px;}\n.y4a{bottom:305.639700px;}\n.y81{bottom:308.639700px;}\n.y1f{bottom:316.895970px;}\n.y68{bottom:317.639700px;}\n.y49{bottom:326.639700px;}\n.ya0{bottom:329.639700px;}\n.yd3{bottom:332.639700px;}\n.y1e{bottom:337.895970px;}\n.y67{bottom:338.639700px;}\n.y48{bottom:347.639700px;}\n.y9f{bottom:350.639700px;}\n.y1d{bottom:358.895970px;}\n.y66{bottom:359.639700px;}\n.y47{bottom:368.639700px;}\n.y9e{bottom:371.639700px;}\n.y1c{bottom:379.895970px;}\n.y80{bottom:380.639700px;}\n.yd2{bottom:383.639700px;}\n.y46{bottom:389.639700px;}\n.y9d{bottom:392.639700px;}\n.ybc{bottom:398.639700px;}\n.y1b{bottom:400.895970px;}\n.y7f{bottom:401.639700px;}\n.yd1{bottom:404.639700px;}\n.y45{bottom:410.639700px;}\n.y9c{bottom:413.639700px;}\n.ybb{bottom:419.639700px;}\n.y1a{bottom:421.895970px;}\n.yae{bottom:422.639700px;}\n.yd0{bottom:425.639700px;}\n.y44{bottom:431.639700px;}\n.y9b{bottom:434.639700px;}\n.yba{bottom:440.639700px;}\n.yad{bottom:443.639700px;}\n.y43{bottom:452.639700px;}\n.ydb{bottom:455.639700px;}\n.yb9{bottom:461.639700px;}\n.yac{bottom:464.639700px;}\n.y19{bottom:472.895970px;}\n.y42{bottom:473.639700px;}\n.ycf{bottom:476.639700px;}\n.yb8{bottom:482.639700px;}\n.y9a{bottom:485.639700px;}\n.y18{bottom:493.895970px;}\n.y65{bottom:494.639700px;}\n.y77{bottom:503.639700px;}\n.y99{bottom:506.639700px;}\n.y17{bottom:514.895970px;}\n.y64{bottom:515.639700px;}\n.y41{bottom:524.639700px;}\n.y98{bottom:527.639700px;}\n.y63{bottom:536.639700px;}\n.yb7{bottom:545.639700px;}\n.y97{bottom:548.639700px;}\n.y7e{bottom:557.639700px;}\n.y16{bottom:565.895970px;}\n.yb6{bottom:566.639700px;}\n.y96{bottom:569.639700px;}\n.y40{bottom:575.639700px;}\n.y7d{bottom:578.639700px;}\n.y15{bottom:586.895970px;}\n.y62{bottom:587.639700px;}\n.y95{bottom:590.639700px;}\n.y3f{bottom:596.639700px;}\n.y7c{bottom:599.639700px;}\n.y14{bottom:607.895970px;}\n.y61{bottom:608.639700px;}\n.y94{bottom:611.639700px;}\n.y3e{bottom:617.639700px;}\n.y7b{bottom:620.639700px;}\n.y13{bottom:628.895970px;}\n.y60{bottom:629.639700px;}\n.y3d{bottom:638.639700px;}\n.y7a{bottom:641.639700px;}\n.y12{bottom:649.895970px;}\n.yab{bottom:650.639700px;}\n.y3c{bottom:659.639700px;}\n.y93{bottom:662.639700px;}\n.y11{bottom:670.895970px;}\n.yaa{bottom:671.639700px;}\n.y3b{bottom:680.639700px;}\n.yce{bottom:683.639700px;}\n.y76{bottom:689.639700px;}\n.y79{bottom:692.639700px;}\n.y3a{bottom:701.639700px;}\n.ycd{bottom:704.639700px;}\n.y75{bottom:710.639700px;}\n.y92{bottom:713.639700px;}\n.y10{bottom:721.895970px;}\n.y39{bottom:722.639700px;}\n.y5f{bottom:731.639700px;}\n.y91{bottom:734.639700px;}\n.y38{bottom:743.639700px;}\n.y5e{bottom:752.639700px;}\n.y90{bottom:755.639700px;}\n.y37{bottom:764.639700px;}\n.yf{bottom:772.895970px;}\n.y5d{bottom:773.639700px;}\n.y8f{bottom:776.639700px;}\n.y36{bottom:785.639700px;}\n.ye{bottom:793.895970px;}\n.y5c{bottom:794.639700px;}\n.ycc{bottom:797.639700px;}\n.y35{bottom:806.639700px;}\n.yd{bottom:814.895970px;}\n.y5b{bottom:815.639700px;}\n.ycb{bottom:818.639700px;}\n.y34{bottom:827.639700px;}\n.yc{bottom:835.895970px;}\n.y5a{bottom:836.639700px;}\n.yca{bottom:839.639700px;}\n.y74{bottom:845.639700px;}\n.y8e{bottom:848.639700px;}\n.yb{bottom:856.895970px;}\n.y59{bottom:857.639700px;}\n.y73{bottom:866.639700px;}\n.y8d{bottom:869.639700px;}\n.ya{bottom:877.895970px;}\n.y33{bottom:878.639700px;}\n.y72{bottom:887.639700px;}\n.ya9{bottom:890.639700px;}\n.y58{bottom:899.639700px;}\n.y71{bottom:908.639700px;}\n.yc9{bottom:911.639700px;}\n.y57{bottom:920.639700px;}\n.y9{bottom:928.895970px;}\n.y32{bottom:929.639700px;}\n.yc8{bottom:932.639700px;}\n.y56{bottom:941.639700px;}\n.y8{bottom:949.895970px;}\n.y31{bottom:950.639700px;}\n.y8c{bottom:962.639700px;}\n.y7{bottom:970.895970px;}\n.y30{bottom:971.639700px;}\n.y8b{bottom:983.639700px;}\n.y6{bottom:991.895970px;}\n.y2f{bottom:992.639700px;}\n.y8a{bottom:1004.639700px;}\n.y5{bottom:1012.895970px;}\n.y2e{bottom:1013.639700px;}\n.y89{bottom:1025.639700px;}\n.y4{bottom:1033.895970px;}\n.y2d{bottom:1034.639700px;}\n.y3{bottom:1054.895970px;}\n.y2c{bottom:1055.639700px;}\n.y2{bottom:1075.895970px;}\n.y2b{bottom:1076.639700px;}\n.h3{height:35.367188px;}\n.h2{height:1097.256300px;}\n.h4{height:1098.000000px;}\n.h0{height:1262.835000px;}\n.h1{height:1263.750000px;}\n.w2{width:731.841300px;}\n.w3{width:735.184650px;}\n.w0{width:892.920000px;}\n.w1{width:894.000000px;}\n.x0{left:0.000000px;}\n.x2{left:4.500000px;}\n.x3{left:21.000000px;}\n.x4{left:58.500000px;}\n.x1{left:80.539380px;}\n@media print{\n.v0{vertical-align:0.000000pt;}\n.ls2{letter-spacing:-0.008533pt;}\n.ls0{letter-spacing:0.000000pt;}\n.ls1{letter-spacing:0.008533pt;}\n.ws0{word-spacing:0.000000pt;}\n._1{margin-left:-4.650667pt;}\n._4{margin-left:-3.276800pt;}\n._0{margin-left:-2.248533pt;}\n._2{margin-left:-1.339733pt;}\n._3{width:0.891733pt;}\n._5{width:73.955556pt;}\n.fs0{font-size:42.666667pt;}\n.y0{bottom:-0.666667pt;}\n.ya8{bottom:10.346347pt;}\n.y55{bottom:13.013013pt;}\n.y29{bottom:15.018587pt;}\n.y70{bottom:15.679680pt;}\n.yda{bottom:21.013013pt;}\n.yc4{bottom:23.679680pt;}\n.ye0{bottom:26.346347pt;}\n.ya7{bottom:29.013013pt;}\n.y54{bottom:31.679680pt;}\n.y28{bottom:33.685253pt;}\n.y6f{bottom:34.346347pt;}\n.yd9{bottom:39.679680pt;}\n.yc3{bottom:42.346347pt;}\n.yb5{bottom:45.013013pt;}\n.yc0{bottom:50.346347pt;}\n.y27{bottom:52.351920pt;}\n.yc7{bottom:53.013013pt;}\n.yd8{bottom:58.346347pt;}\n.yc2{bottom:61.013067pt;}\n.ybf{bottom:69.013067pt;}\n.y26{bottom:71.018640pt;}\n.yc6{bottom:71.679733pt;}\n.ya6{bottom:74.346400pt;}\n.y2a{bottom:74.929467pt;}\n.y1{bottom:75.590560pt;}\n.y53{bottom:77.013067pt;}\n.y6e{bottom:79.679733pt;}\n.ybe{bottom:87.679733pt;}\n.yb4{bottom:90.346400pt;}\n.ya5{bottom:93.013067pt;}\n.y52{bottom:95.679733pt;}\n.y6d{bottom:98.346400pt;}\n.ybd{bottom:106.346400pt;}\n.yb3{bottom:109.013067pt;}\n.y51{bottom:114.346400pt;}\n.y25{bottom:116.351973pt;}\n.y6c{bottom:117.013067pt;}\n.y88{bottom:125.013067pt;}\n.yb2{bottom:127.679733pt;}\n.y50{bottom:133.013067pt;}\n.y24{bottom:135.018640pt;}\n.yc1{bottom:135.679733pt;}\n.ya4{bottom:138.346400pt;}\n.yd7{bottom:141.013067pt;}\n.y87{bottom:143.679733pt;}\n.ydf{bottom:146.346400pt;}\n.y4f{bottom:151.679733pt;}\n.y23{bottom:153.685307pt;}\n.yc5{bottom:154.346400pt;}\n.ya3{bottom:157.013067pt;}\n.y6b{bottom:162.346400pt;}\n.yde{bottom:165.013067pt;}\n.y4e{bottom:170.346400pt;}\n.yb1{bottom:173.013067pt;}\n.y86{bottom:181.013067pt;}\n.ydd{bottom:183.679733pt;}\n.yd6{bottom:186.346400pt;}\n.y4d{bottom:189.013067pt;}\n.yb0{bottom:191.679733pt;}\n.y22{bottom:199.018640pt;}\n.y85{bottom:199.679733pt;}\n.ya2{bottom:202.346400pt;}\n.y4c{bottom:207.679733pt;}\n.yaf{bottom:210.346400pt;}\n.y84{bottom:218.346400pt;}\n.y4b{bottom:226.346400pt;}\n.ydc{bottom:229.013067pt;}\n.yd5{bottom:231.679733pt;}\n.y83{bottom:237.013067pt;}\n.y21{bottom:244.351973pt;}\n.y6a{bottom:245.013067pt;}\n.ya1{bottom:247.679733pt;}\n.yd4{bottom:250.346400pt;}\n.y78{bottom:253.013067pt;}\n.y82{bottom:255.679733pt;}\n.y20{bottom:263.018640pt;}\n.y69{bottom:263.679733pt;}\n.y4a{bottom:271.679733pt;}\n.y81{bottom:274.346400pt;}\n.y1f{bottom:281.685307pt;}\n.y68{bottom:282.346400pt;}\n.y49{bottom:290.346400pt;}\n.ya0{bottom:293.013067pt;}\n.yd3{bottom:295.679733pt;}\n.y1e{bottom:300.351973pt;}\n.y67{bottom:301.013067pt;}\n.y48{bottom:309.013067pt;}\n.y9f{bottom:311.679733pt;}\n.y1d{bottom:319.018640pt;}\n.y66{bottom:319.679733pt;}\n.y47{bottom:327.679733pt;}\n.y9e{bottom:330.346400pt;}\n.y1c{bottom:337.685307pt;}\n.y80{bottom:338.346400pt;}\n.yd2{bottom:341.013067pt;}\n.y46{bottom:346.346400pt;}\n.y9d{bottom:349.013067pt;}\n.ybc{bottom:354.346400pt;}\n.y1b{bottom:356.351973pt;}\n.y7f{bottom:357.013067pt;}\n.yd1{bottom:359.679733pt;}\n.y45{bottom:365.013067pt;}\n.y9c{bottom:367.679733pt;}\n.ybb{bottom:373.013067pt;}\n.y1a{bottom:375.018640pt;}\n.yae{bottom:375.679733pt;}\n.yd0{bottom:378.346400pt;}\n.y44{bottom:383.679733pt;}\n.y9b{bottom:386.346400pt;}\n.yba{bottom:391.679733pt;}\n.yad{bottom:394.346400pt;}\n.y43{bottom:402.346400pt;}\n.ydb{bottom:405.013067pt;}\n.yb9{bottom:410.346400pt;}\n.yac{bottom:413.013067pt;}\n.y19{bottom:420.351973pt;}\n.y42{bottom:421.013067pt;}\n.ycf{bottom:423.679733pt;}\n.yb8{bottom:429.013067pt;}\n.y9a{bottom:431.679733pt;}\n.y18{bottom:439.018640pt;}\n.y65{bottom:439.679733pt;}\n.y77{bottom:447.679733pt;}\n.y99{bottom:450.346400pt;}\n.y17{bottom:457.685307pt;}\n.y64{bottom:458.346400pt;}\n.y41{bottom:466.346400pt;}\n.y98{bottom:469.013067pt;}\n.y63{bottom:477.013067pt;}\n.yb7{bottom:485.013067pt;}\n.y97{bottom:487.679733pt;}\n.y7e{bottom:495.679733pt;}\n.y16{bottom:503.018640pt;}\n.yb6{bottom:503.679733pt;}\n.y96{bottom:506.346400pt;}\n.y40{bottom:511.679733pt;}\n.y7d{bottom:514.346400pt;}\n.y15{bottom:521.685307pt;}\n.y62{bottom:522.346400pt;}\n.y95{bottom:525.013067pt;}\n.y3f{bottom:530.346400pt;}\n.y7c{bottom:533.013067pt;}\n.y14{bottom:540.351973pt;}\n.y61{bottom:541.013067pt;}\n.y94{bottom:543.679733pt;}\n.y3e{bottom:549.013067pt;}\n.y7b{bottom:551.679733pt;}\n.y13{bottom:559.018640pt;}\n.y60{bottom:559.679733pt;}\n.y3d{bottom:567.679733pt;}\n.y7a{bottom:570.346400pt;}\n.y12{bottom:577.685307pt;}\n.yab{bottom:578.346400pt;}\n.y3c{bottom:586.346400pt;}\n.y93{bottom:589.013067pt;}\n.y11{bottom:596.351973pt;}\n.yaa{bottom:597.013067pt;}\n.y3b{bottom:605.013067pt;}\n.yce{bottom:607.679733pt;}\n.y76{bottom:613.013067pt;}\n.y79{bottom:615.679733pt;}\n.y3a{bottom:623.679733pt;}\n.ycd{bottom:626.346400pt;}\n.y75{bottom:631.679733pt;}\n.y92{bottom:634.346400pt;}\n.y10{bottom:641.685307pt;}\n.y39{bottom:642.346400pt;}\n.y5f{bottom:650.346400pt;}\n.y91{bottom:653.013067pt;}\n.y38{bottom:661.013067pt;}\n.y5e{bottom:669.013067pt;}\n.y90{bottom:671.679733pt;}\n.y37{bottom:679.679733pt;}\n.yf{bottom:687.018640pt;}\n.y5d{bottom:687.679733pt;}\n.y8f{bottom:690.346400pt;}\n.y36{bottom:698.346400pt;}\n.ye{bottom:705.685307pt;}\n.y5c{bottom:706.346400pt;}\n.ycc{bottom:709.013067pt;}\n.y35{bottom:717.013067pt;}\n.yd{bottom:724.351973pt;}\n.y5b{bottom:725.013067pt;}\n.ycb{bottom:727.679733pt;}\n.y34{bottom:735.679733pt;}\n.yc{bottom:743.018640pt;}\n.y5a{bottom:743.679733pt;}\n.yca{bottom:746.346400pt;}\n.y74{bottom:751.679733pt;}\n.y8e{bottom:754.346400pt;}\n.yb{bottom:761.685307pt;}\n.y59{bottom:762.346400pt;}\n.y73{bottom:770.346400pt;}\n.y8d{bottom:773.013067pt;}\n.ya{bottom:780.351973pt;}\n.y33{bottom:781.013067pt;}\n.y72{bottom:789.013067pt;}\n.ya9{bottom:791.679733pt;}\n.y58{bottom:799.679733pt;}\n.y71{bottom:807.679733pt;}\n.yc9{bottom:810.346400pt;}\n.y57{bottom:818.346400pt;}\n.y9{bottom:825.685307pt;}\n.y32{bottom:826.346400pt;}\n.yc8{bottom:829.013067pt;}\n.y56{bottom:837.013067pt;}\n.y8{bottom:844.351973pt;}\n.y31{bottom:845.013067pt;}\n.y8c{bottom:855.679733pt;}\n.y7{bottom:863.018640pt;}\n.y30{bottom:863.679733pt;}\n.y8b{bottom:874.346400pt;}\n.y6{bottom:881.685307pt;}\n.y2f{bottom:882.346400pt;}\n.y8a{bottom:893.013067pt;}\n.y5{bottom:900.351973pt;}\n.y2e{bottom:901.013067pt;}\n.y89{bottom:911.679733pt;}\n.y4{bottom:919.018640pt;}\n.y2d{bottom:919.679733pt;}\n.y3{bottom:937.685307pt;}\n.y2c{bottom:938.346400pt;}\n.y2{bottom:956.351973pt;}\n.y2b{bottom:957.013067pt;}\n.h3{height:31.437500pt;}\n.h2{height:975.338933pt;}\n.h4{height:976.000000pt;}\n.h0{height:1122.520000pt;}\n.h1{height:1123.333333pt;}\n.w2{width:650.525600pt;}\n.w3{width:653.497467pt;}\n.w0{width:793.706667pt;}\n.w1{width:794.666667pt;}\n.x0{left:0.000000pt;}\n.x2{left:4.000000pt;}\n.x3{left:18.666667pt;}\n.x4{left:52.000000pt;}\n.x1{left:71.590560pt;}\n}\n",
        }}
      />
      <title />
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <div id="pf1" className="pf w0 h0" data-page-no={1}>
          <div className="pc pc1 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3Vs00AMhmH4w/gOShZAzOFFbhHmyCJeJBVTMMhR2FYgNNA/j/QrTmSfo+teAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCzysAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8vAIAAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAMIPAAAA4QcAAJpxB9QAAACMSURBVIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAADhBwAAgPADAAAAAACAfyovNUlynufZSnJsSS9jXh+TNtdtznv923zf//Y8nntsyXXOsSWfNWn7+N5Kknm2r9/2sW/tWWfW+vI0Ptedubt/ra8PYzLXff/9f/u8f53LvCf1Nh/ltreXn89NHe/w3heSCkt3R8hHcwAAAABJRU5ErkJggg=="
            />
            <div className="c x1 y1 w2 h2">
              <div className="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">
                These terms and conditions (together with the information and
                policies contained in the{" "}
              </div>
              <div className="t m0 x2 h3 y3 ff1 fs0 fc0 sc0 ls0 ws0">
                “Privacy Policy” pages within our <span className="_ _0" />
                App and on our website, as well as any other documents{" "}
              </div>
              <div className="t m0 x2 h3 y4 ff1 fs0 fc0 sc0 ls0 ws0">
                referred in these terms and conditions) (“T
                <span className="_ _1" />
                erms and Conditions”) set out the legal terms{" "}
              </div>
              <div className="t m0 x2 h3 y5 ff1 fs0 fc0 sc0 ls0 ws0">
                that apply to your use of our mobile application (Milano
                Delivery) or website,{" "}
              </div>
              <div className="t m0 x2 h3 y6 ff1 fs0 fc0 sc0 ls0 ws0">
                https://barntech.eu/, any of its sub-domains and any other
                websites operated by us or on{" "}
              </div>
              <div className="t m0 x2 h3 y7 ff1 fs0 fc0 sc0 ls0 ws0">
                our behalf and any mobile device application or desktop
                application developed by us or on{" "}
              </div>
              <div className="t m0 x2 h3 y8 ff1 fs0 fc0 sc0 ls0 ws0">
                our behalf (together
                <span className="_ _0" />, the “Mobile <span className="_ _0" />
                Application” and “Website” being a reference to any one{" "}
              </div>
              <div className="t m0 x2 h3 y9 ff1 fs0 fc0 sc0 ls0 ws0">
                of them) and the other services that we provide (the
                “Services”).
              </div>
              <div className="t m0 x2 h3 ya ff1 fs0 fc0 sc0 ls0 ws0">
                Please read these T<span className="_ _1" />
                erms and Conditions carefully and make sure that you understand{" "}
              </div>
              <div className="t m0 x2 h3 yb ff1 fs0 fc0 sc0 ls0 ws0">
                them before using the Services. Please note that by using the
                Services, you agree to be{" "}
              </div>
              <div className="t m0 x2 h3 yc ff1 fs0 fc0 sc0 ls0 ws0">
                bound by these T<span className="_ _1" />
                erms and Conditions. If you do not accept these{" "}
                <span className="_ _0" />T<span className="_ _1" />
                erms and Conditions,{" "}
              </div>
              <div className="t m0 x2 h3 yd ff1 fs0 fc0 sc0 ls0 ws0">
                you will not be able to use the Services and you should leave
                the Mobile <span className="_ _0" />
                Application or{" "}
              </div>
              <div className="t m0 x2 h3 ye ff1 fs0 fc0 sc0 ls0 ws0">
                Website immediately
                <span className="_ _1" />. If you continue to use the Mobile{" "}
                <span className="_ _0" />
                Application or Website or if you{" "}
              </div>
              <div className="t m0 x2 h3 yf ff1 fs0 fc0 sc0 ls0 ws0">
                order products, we will take this as your acceptance of these T
                <span className="_ _1" />
                erms and Conditions.
              </div>
              <div className="t m0 x2 h3 y10 ff1 fs0 fc0 sc0 ls0 ws0">
                1) Understanding these T<span className="_ _1" />
                erms and Conditions
              </div>
              <div className="t m0 x2 h3 y11 ff1 fs0 fc0 sc0 ls0 ws0">
                When certain words and phrases are used in these T
                <span className="_ _1" />
                erms and Conditions, they have{" "}
              </div>
              <div className="t m0 x2 h3 y12 ff1 fs0 fc0 sc0 ls0 ws0">
                speciﬁc meanings (these are known as ‘deﬁned terms’). Y
                <span className="_ _1" />
                ou can identify these deﬁ<span className="ls1">ned </span>
              </div>
              <div className="t m0 x2 h3 y13 ff1 fs0 fc0 sc0 ls0 ws0">
                terms because they start with capital letters (even if they are
                not at the start of a{" "}
              </div>
              <div className="t m0 x2 h3 y14 ff1 fs0 fc0 sc0 ls0 ws0">
                sentence). Where a deﬁned term is used, it has the meaning given
                to it in the section of{" "}
              </div>
              <div className="t m0 x2 h3 y15 ff1 fs0 fc0 sc0 ls0 ws0">
                the T<span className="_ _1" />
                erms and Conditions where it was deﬁned (you can ﬁnd these
                meanings by looking at{" "}
              </div>
              <div className="t m0 x2 h3 y16 ff1 fs0 fc0 sc0 ls0 ws0">
                the sentence where the deﬁned term is included in brackets and
                speech marks).
              </div>
              <div className="t m0 x2 h3 y17 ff1 fs0 fc0 sc0 ls0 ws0">
                When we refer to “Milano Delivery”, “we”, “us” or “our”, we mean
                BARN or
                <span className="_ _0" />, where relevant,{" "}
              </div>
              <div className="t m0 x2 h3 y18 ff1 fs0 fc0 sc0 ls0 ws0">
                its afﬁliates. Where we refer to “you” or “your” we mean you,
                the person using the{" "}
              </div>
              <div className="t m0 x2 h3 y19 ff1 fs0 fc0 sc0 ls0 ws0">
                Services.
              </div>
              <div className="t m0 x2 h3 y1a ff1 fs0 fc0 sc0 ls0 ws0">
                We have used headings to help you understand these{" "}
                <span className="_ _2" />T<span className="_ _1" />
                erms and Conditions and to easily{" "}
              </div>
              <div className="t m0 x2 h3 y1b ff1 fs0 fc0 sc0 ls0 ws0">
                locate information. These <span className="_ _0" />T
                <span className="_ _1" />
                erms and Conditions are only available in
                <span className="_ _3" /> the English or Italian{" "}
              </div>
              <div className="t m0 x2 h3 y1c ff1 fs0 fc0 sc0 ls0 ws0">
                languages. We will not ﬁle copies of the contracts between us
                and you relating to our{" "}
              </div>
              <div className="t m0 x2 h3 y1d ff1 fs0 fc0 sc0 ls0 ws0">
                supply of the Services, or between you and the Partners relating
                to the sale of the{" "}
              </div>
              <div className="t m0 x2 h3 y1e ff1 fs0 fc0 sc0 ls0 ws0">
                products, so we recommend that you print or save a copy of these
                T
                <span className="_ _1" />
                erms and Conditions{" "}
              </div>
              <div className="t m0 x2 h3 y1f ff1 fs0 fc0 sc0 ls0 ws0">
                for your records (but please note that we may amend these T
                <span className="_ _1" />
                erms and Conditions from{" "}
              </div>
              <div className="t m0 x2 h3 y20 ff1 fs0 fc0 sc0 ls0 ws0">
                time to time so please check the Website regularly
                <span className="_ _1" />, and each time you use
                <span className="_ _3" /> the Services to{" "}
              </div>
              <div className="t m0 x2 h3 y21 ff1 fs0 fc0 sc0 ls0 ws0">
                order products, to ensure you understand the legal terms which
                apply at that time).
              </div>
              <div className="t m0 x2 h3 y22 ff1 fs0 fc0 sc0 ls0 ws0">
                2) <span className="_ _0" />
                About us
              </div>
              <div className="t m0 x2 h3 y23 ff1 fs0 fc0 sc0 ls0 ws0">
                IMPORT
                <span className="_ _1" />
                ANT
                <span className="_ _1" />: If you are purchasing products from
                any of the brands or boutiques listed at{" "}
              </div>
              <div className="t m0 x2 h3 y24 ff1 fs0 fc0 sc0 ls0 ws0">
                the end of section 20 below (“Selected Partners”), then
                additional or different terms may{" "}
              </div>
              <div className="t m0 x2 h3 y25 ff1 fs0 fc0 sc0 ls0 ws0">
                apply to you in this section. Please see below
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y26 ff1 fs0 fc0 sc0 ls0 ws0">
                We are Milano Delivery and we operate the Mobile{" "}
                <span className="_ _0" />
                Application and W<span className="_ _0" />e
                <span className="_ _3" />
                bsite. We provide{" "}
              </div>
              <div className="t m0 x2 h3 y27 ff1 fs0 fc0 sc0 ls0 ws0">
                the services through our mobile application and website. Further
                details of the services we{" "}
              </div>
              <div className="t m0 x2 h3 y28 ff1 fs0 fc0 sc0 ls0 ws0">
                provide are set out in section 3 below
                <span className="_ _0" />. When you purchase products using the
                website,{" "}
              </div>
              <div className="t m0 x2 h3 y29 ff1 fs0 fc0 sc0 ls0 ws0">
                you are purchasing them from the third party retailers
                (“Partner(s)”) named on the Mobile{" "}
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf2" className="pf w0 h0" data-page-no={2}>
          <div className="pc pc2 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3Vs00AMhmH4w/gOShZAzOFFbhHmyCJeJBVTMMhR2FYgNNA/j/QrTmSfo+teAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCzysAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8vAIAAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAMIPAAAA4QcAAJpxB9QAAACMSURBVIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAADhBwAAgPADAAAAAACAfyovNUlynufZSnJsSS9jXh+TNtdtznv923zf//Y8nntsyXXOsSWfNWn7+N5Kknm2r9/2sW/tWWfW+vI0Ptedubt/ra8PYzLXff/9f/u8f53LvCf1Nh/ltreXn89NHe/w3heSCkt3R8hHcwAAAABJRU5ErkJggg=="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website. It is important that you understand that
                the contract for the{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                purchase of the products is between you and the relevant Partner
                <span className="_ _0" />. We are acting as agent{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                on behalf of the Partners, which are the principals. Y
                <span className="_ _1" />
                ou are not purchasing the products{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                from us. We are authorised by the relevant Partners to conclude
                the contract on their{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                behalf but we are not a party to that contract and you are not
                purchasing the products from{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                us. or through us as your agent. Further details about the
                products, the Partners and the{" "}
              </div>
              <div className="t m0 x2 h3 y31 ff1 fs0 fc0 sc0 ls0 ws0">
                contract between you and the Partners in relation to your
                purchase of the products are set{" "}
              </div>
              <div className="t m0 x2 h3 y32 ff1 fs0 fc0 sc0 ls0 ws0">
                out in sections 5, 6 and 7 below
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y33 ff1 fs0 fc0 sc0 ls0 ws0">
                3) Our Services
              </div>
              <div className="t m0 x2 h3 y34 ff1 fs0 fc0 sc0 ls0 ws0">
                The services we offer allow you to search through the Mobile{" "}
                <span className="_ _0" />
                Application or W<span className="_ _0" />
                ebsite and{" "}
              </div>
              <div className="t m0 x2 h3 y35 ff1 fs0 fc0 sc0 ls0 ws0">
                purchase products from a number of Partner boutiques and brands
                in Milan. <span className="_ _0" />
                As part of the{" "}
              </div>
              <div className="t m0 x2 h3 y36 ff1 fs0 fc0 sc0 ls0 ws0">
                Services, we also provide some ancillary services such as
                arranging delivery of the{" "}
              </div>
              <div className="t m0 x2 h3 y37 ff1 fs0 fc0 sc0 ls0 ws0">
                products, and providing you with customer service assistance.
                BARN manages and runs{" "}
              </div>
              <div className="t m0 x2 h3 y38 ff1 fs0 fc0 sc0 ls0 ws0">
                the Mobile <span className="_ _0" />
                Application and Website platform and provides the Services for
                sales made to{" "}
              </div>
              <div className="t m0 x2 h3 y39 ff1 fs0 fc0 sc0 ls0 ws0">
                customers. However
                <span className="_ _0" />, as stated above, the contract for the
                purchase of the products is{" "}
              </div>
              <div className="t m0 x2 h3 y3a ff1 fs0 fc0 sc0 ls0 ws0">
                between you and the relevant Partner
                <span className="_ _0" />. This means that it is the Partner
                (not us) who is{" "}
              </div>
              <div className="t m0 x2 h3 y3b ff1 fs0 fc0 sc0 ls0 ws0">
                legally responsible for selling the products to you. Please note
                that the delivery logistics{" "}
              </div>
              <div className="t m0 x2 h3 y3c ff1 fs0 fc0 sc0 ls0 ws0">
                service is being provided by us to you and as such you are
                entering into a contract for{" "}
              </div>
              <div className="t m0 x2 h3 y3d ff1 fs0 fc0 sc0 ls0 ws0">
                delivery services provided by us to deliver products on behalf
                of Partners. We may make a{" "}
              </div>
              <div className="t m0 x2 h3 y3e ff1 fs0 fc0 sc0 ls0 ws0">
                charge for these services which will be shown at checkout and
                prior to your purchase of{" "}
              </div>
              <div className="t m0 x2 h3 y3f ff1 fs0 fc0 sc0 ls0 ws0">
                the products. Y<span className="_ _1" />
                our contract with us is concluded once the products have been
                delivered to{" "}
              </div>
              <div className="t m0 x2 h3 y40 ff1 fs0 fc0 sc0 ls0 ws0">
                you by the courier or have been collected by you from a Partner
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y41 ff1 fs0 fc0 sc0 ls0 ws0">
                In order to use the Services you must be over 18 years of age.
              </div>
              <div className="t m0 x2 h3 y42 ff1 fs0 fc0 sc0 ls0 ws0">
                4) Our liability to you in relation to the Services If, in
                providing the Services to you, we fail{" "}
              </div>
              <div className="t m0 x2 h3 y43 ff1 fs0 fc0 sc0 ls0 ws0">
                to comply with these T<span className="_ _1" />
                erms and Conditions, we are responsible for loss or damage you{" "}
              </div>
              <div className="t m0 x2 h3 y44 ff1 fs0 fc0 sc0 ls0 ws0">
                suffer that is a foreseeable result of our breach of these{" "}
                <span className="_ _0" />T<span className="_ _1" />
                erms and Conditions or our{" "}
              </div>
              <div className="t m0 x2 h3 y45 ff1 fs0 fc0 sc0 ls0 ws0">
                negligence, but we are not responsible for any loss or damage
                that is not foreseeable.{" "}
              </div>
              <div className="t m0 x2 h3 y46 ff1 fs0 fc0 sc0 ls0 ws0">
                Loss or damage is foreseeable if it was an obvious consequence
                of our breach or if it was{" "}
              </div>
              <div className="t m0 x2 h3 y47 ff1 fs0 fc0 sc0 ls0 ws0">
                contemplated by you and us at the time you started using the
                Services. We do not in any{" "}
              </div>
              <div className="t m0 x2 h3 y48 ff1 fs0 fc0 sc0 ls0 ws0">
                way exclude or limit our liability for: (a) death or personal
                injury caused by our negligence;{" "}
              </div>
              <div className="t m0 x2 h3 y49 ff1 fs0 fc0 sc0 ls0 ws0">
                (b) fraud or fraudulent misrepresentation; (c) any other
                liability which cannot be limited by{" "}
              </div>
              <div className="t m0 x2 h3 y4a ff1 fs0 fc0 sc0 ls1 ws0">
                law
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y4b ff1 fs0 fc0 sc0 ls0 ws0">
                5) The products W<span className="_ _0" />e attempt to be as
                accurate as possible in the description of the{" "}
              </div>
              <div className="t m0 x2 h3 y4c ff1 fs0 fc0 sc0 ls0 ws0">
                products displayed on the Mobile <span className="_ _0" />
                Application or Website. However
                <span className="_ _0" />, as the descriptions are{" "}
              </div>
              <div className="t m0 x2 h3 y4d ff1 fs0 fc0 sc0 ls0 ws0">
                based on information provided to us by the Partners (who remain
                responsible for them),{" "}
              </div>
              <div className="t m0 x2 h3 y4e ff1 fs0 fc0 sc0 ls0 ws0">
                we cannot guarantee that all details are always accurate,
                complete or error free. Please{" "}
              </div>
              <div className="t m0 x2 h3 y4f ff1 fs0 fc0 sc0 ls0 ws0">
                contact our Customer Service <span className="_ _0" />
                Advisors if you would like more information about a product.{" "}
              </div>
              <div className="t m0 x2 h3 y50 ff1 fs0 fc0 sc0 ls0 ws0">
                The images of the products on the Mobile{" "}
                <span className="_ _0" />
                Application and Website are for illustrative{" "}
              </div>
              <div className="t m0 x2 h3 y51 ff1 fs0 fc0 sc0 ls0 ws0">
                purposes only
                <span className="_ _0" />, and although we attempt to display
                colours accurately
                <span className="_ _1" />, we cannot{" "}
              </div>
              <div className="t m0 x2 h3 y52 ff1 fs0 fc0 sc0 ls0 ws0">
                guarantee that your phone or computer
                <span className="_ _3" />
                ’s display of the images accurately reﬂects the true{" "}
              </div>
              <div className="t m0 x2 h3 y53 ff1 fs0 fc0 sc0 ls0 ws0">
                colour of the products.
              </div>
              <div className="t m0 x2 h3 y54 ff1 fs0 fc0 sc0 ls0 ws0">
                We do not allow Partners to of
                <span className="_ _0" />
                fer ﬂawed items or products of lower quality than the{" "}
              </div>
              <div className="t m0 x2 h3 y55 ff1 fs0 fc0 sc0 ls0 ws0">
                corresponding market standards for sale on the website. If an
                item you have ordered is not{" "}
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf3" className="pf w0 h0" data-page-no={3}>
          <div className="pc pc3 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                as described, is ﬂawed or of a lower quality
                <span className="_ _0" />, you can return it to us and we will
                liaise with{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                the Partner to process the return. Once the item is received by
                the relevant Partner
                <span className="_ _0" />, you{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                will receive a full refund of the defective item, or a
                replacement or repair for the item where{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                possible, decided by us on a case by case basis. We will refund
                you any applicable{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                delivery
                <span className="_ _0" />. Please see section 10 below for
                details of how to arrange a return.
              </div>
              <div className="t m0 x2 h3 y56 ff1 fs0 fc0 sc0 ls0 ws0">
                As a consumer
                <span className="_ _0" />, you have legal rights in relation to
                products that are faulty or not as{" "}
              </div>
              <div className="t m0 x2 h3 y57 ff1 fs0 fc0 sc0 ls0 ws0">
                described. <span className="_ _0" />
                Advice about your legal rights is available from your local
                Citizens’
                <span className="_ _0" /> <span className="_ _0" />
                Advice{" "}
              </div>
              <div className="t m0 x2 h3 y58 ff1 fs0 fc0 sc0 ls0 ws0">
                Bureau or T<span className="_ _0" />
                rading Standards ofﬁce. Nothing in these T
                <span className="_ _1" />
                erms and Conditions will af
                <span className="_ _0" />
                fect{" "}
              </div>
              <div className="t m0 x2 h3 y33 ff1 fs0 fc0 sc0 ls0 ws0">
                these legal rights. The products sold by the Partners are
                supplied for your domestic and{" "}
              </div>
              <div className="t m0 x2 h3 y59 ff1 fs0 fc0 sc0 ls0 ws0">
                private use only
                <span className="_ _0" />. <span className="_ _0" />Y
                <span className="_ _4" />
                ou agree that you will not use the products for any commercial,
                business{" "}
              </div>
              <div className="t m0 x2 h3 y5a ff1 fs0 fc0 sc0 ls0 ws0">
                or re-sale purposes. Y<span className="_ _1" />
                ou further agree that you will not export, reexport, or
                otherwise{" "}
              </div>
              <div className="t m0 x2 h3 y5b ff1 fs0 fc0 sc0 ls0 ws0">
                transfer the products to countries or territories that are the
                target of comprehensive{" "}
              </div>
              <div className="t m0 x2 h3 y5c ff1 fs0 fc0 sc0 ls0 ws0">
                embargoes or sanctions or to parties identiﬁed on the U.S. T
                <span className="_ _0" />
                reasury Department’s List of{" "}
              </div>
              <div className="t m0 x2 h3 y5d ff1 fs0 fc0 sc0 ls0 ws0">
                Specially Designated Nationals and Blocked Persons List or the
                E.U.’s Consolidated{" "}
              </div>
              <div className="t m0 x2 h3 y5e ff1 fs0 fc0 sc0 ls0 ws0">
                Financial Sanctions List. Neither we nor the Partners have any
                liability to you for any loss{" "}
              </div>
              <div className="t m0 x2 h3 y5f ff1 fs0 fc0 sc0 ls0 ws0">
                of proﬁt, loss of business, interruption of business, or loss of
                business opportunity
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 y3b ff1 fs0 fc0 sc0 ls0 ws0">
                6) Milano Delivery Partners
              </div>
              <div className="t m0 x2 h3 y60 ff1 fs0 fc0 sc0 ls0 ws0">
                IMPORT
                <span className="_ _1" />
                ANT
                <span className="_ _1" />: If you are purchasing products from
                any of the brands or boutiques listed at{" "}
              </div>
              <div className="t m0 x2 h3 y61 ff1 fs0 fc0 sc0 ls0 ws0">
                the end of section 20 below (“Selected Partners”), then
                additional or different terms may{" "}
              </div>
              <div className="t m0 x2 h3 y62 ff1 fs0 fc0 sc0 ls0 ws0">
                apply to you in this section. Please see below
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y63 ff1 fs0 fc0 sc0 ls0 ws0">
                As explained above, the contract for the purchase of the
                products is between you and the{" "}
              </div>
              <div className="t m0 x2 h3 y64 ff1 fs0 fc0 sc0 ls0 ws0">
                relevant Partner
                <span className="_ _0" />. We are acting as agent and are
                authorised by the relevant Partner to{" "}
              </div>
              <div className="t m0 x2 h3 y65 ff1 fs0 fc0 sc0 ls0 ws0">
                conclude the contract with you on its behalf but we are not a
                party to that contract and you{" "}
              </div>
              <div className="t m0 x2 h3 y42 ff1 fs0 fc0 sc0 ls0 ws0">
                are not purchasing the products directly from us or through us
                acting as your agent. When{" "}
              </div>
              <div className="t m0 x2 h3 y43 ff1 fs0 fc0 sc0 ls0 ws0">
                you purchase products using the Website, we will receive payment
                from you and hold{" "}
              </div>
              <div className="t m0 x2 h3 y44 ff1 fs0 fc0 sc0 ls0 ws0">
                those funds on behalf of the relevant Partner
                <span className="_ _0" />, before transferring the relevant
                amount to{" "}
              </div>
              <div className="t m0 x2 h3 y45 ff1 fs0 fc0 sc0 ls0 ws0">
                the Partner once the products have been provided to you.
              </div>
              <div className="t m0 x2 h3 y66 ff1 fs0 fc0 sc0 ls0 ws0">
                We request that all Partners using the Mobile{" "}
                <span className="_ _4" />
                Application or Website have and maintain{" "}
              </div>
              <div className="t m0 x2 h3 y67 ff1 fs0 fc0 sc0 ls0 ws0">
                reasonable business policies which comply with our own business
                policies. We cannot,{" "}
              </div>
              <div className="t m0 x2 h3 y68 ff1 fs0 fc0 sc0 ls0 ws0">
                however
                <span className="_ _0" />, be responsible for the Partners’
                <span className="_ _0" /> business policies. If you are unhappy
                with the{" "}
              </div>
              <div className="t m0 x2 h3 y69 ff1 fs0 fc0 sc0 ls0 ws0">
                product or service you have received from a Partner
                <span className="_ _0" />, you should contact us and we will{" "}
              </div>
              <div className="t m0 x2 h3 y6a ff1 fs0 fc0 sc0 ls0 ws0">
                liaise with the relevant Partner to try and resolve the issue.
                <span className="ff2">!</span>
              </div>
              <div className="t m0 x2 h3 y4b ff1 fs0 fc0 sc0 ls0 ws0">
                Further information about the Partners and the products they
                offer is available in our How{" "}
              </div>
              <div className="t m0 x2 h3 y4c ff1 fs0 fc0 sc0 ls0 ws0">
                to Shop page.
              </div>
              <div className="t m0 x2 h3 y6b ff1 fs0 fc0 sc0 ls0 ws0">
                7) Orders, prices, payment and taxes
              </div>
              <div className="t m0 x2 h3 y6c ff1 fs0 fc0 sc0 ls0 ws0">
                IMPORT
                <span className="_ _1" />
                ANT
                <span className="_ _1" />: If you are purchasing products from
                any of the brands or boutiques listed at{" "}
              </div>
              <div className="t m0 x2 h3 y6d ff1 fs0 fc0 sc0 ls0 ws0">
                the end of section 20 below (“Selected Partners”), then
                additional or different terms may{" "}
              </div>
              <div className="t m0 x2 h3 y6e ff1 fs0 fc0 sc0 ls0 ws0">
                apply to you in this section. Please see section 20 below
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y6f ff1 fs0 fc0 sc0 ls0 ws0">
                The steps you need to take to place an order are explained
                within the Mobile <span className="_ _0" />
                Application or{" "}
              </div>
              <div className="t m0 x2 h3 y70 ff1 fs0 fc0 sc0 ls0 ws0">
                Website.
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf4" className="pf w0 h0" data-page-no={4}>
          <div className="pc pc4 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w3 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                By completing the check-out process and placing an order by
                clicking the “Pay Now” or{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                “Pay” or “Order now” and other native payment button on the
                checkout page, you are{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                offering to purchase the products from the relevant Partner (and
                not directly from us). <span className="_ _0" />Y
                <span className="_ _4" />
                our{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                order for the products is subject to these T
                <span className="_ _1" />
                erms and Conditions which are incorporated into{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                the contract between you and the relevant Partner
                <span className="_ _0" />. <span className="_ _0" />
                All orders are subject to availability and{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                conﬁrmation of the order price, and we may need to cancel your
                order (or part of your{" "}
              </div>
              <div className="t m0 x2 h3 y31 ff1 fs0 fc0 sc0 ls0 ws0">
                order) if the product is either not available, or not available
                at the order price which is{" "}
              </div>
              <div className="t m0 x2 h3 y32 ff1 fs0 fc0 sc0 ls0 ws0">
                determined by the relevant Partner
                <span className="_ _0" />. <span className="_ _0" />
                After entering into the contract for the products with{" "}
              </div>
              <div className="t m0 x2 h3 y71 ff1 fs0 fc0 sc0 ls0 ws0">
                the Partner
                <span className="_ _0" />, the Partner will be under a legal
                duty to supply you with goods that are in{" "}
              </div>
              <div className="t m0 x2 h3 y72 ff1 fs0 fc0 sc0 ls0 ws0">
                conformity with the contract. Legal title to the product
                purchased will pass to you upon{" "}
              </div>
              <div className="t m0 x2 h3 y73 ff1 fs0 fc0 sc0 ls0 ws0">
                shipment of your order
                <span className="_ _0" />. Risk in the product will remain with
                the Partner and/or BARN (as{" "}
              </div>
              <div className="t m0 x2 h3 y74 ff1 fs0 fc0 sc0 ls0 ws0">
                applicable) until it is delivered to you at the address speciﬁed
                when you placed your order
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y5c ff1 fs0 fc0 sc0 ls0 ws0">
                T<span className="_ _1" />o order products you must be over 18
                years of age and possess a valid credit or debit{" "}
              </div>
              <div className="t m0 x2 h3 y5d ff1 fs0 fc0 sc0 ls0 ws0">
                card (please see section (c) below for details of acceptable
                payment methods). By placing{" "}
              </div>
              <div className="t m0 x2 h3 y5e ff1 fs0 fc0 sc0 ls0 ws0">
                an order
                <span className="_ _0" />, you are promising that all details
                you provide are true and accurate, that you are{" "}
              </div>
              <div className="t m0 x2 h3 y5f ff1 fs0 fc0 sc0 ls0 ws0">
                over 18 years of age, that you are an authorised user of the
                credit or debit card used to{" "}
              </div>
              <div className="t m0 x2 h3 y75 ff1 fs0 fc0 sc0 ls0 ws0">
                place your order and that there are sufﬁcient funds in the
                account to cover the cost of your{" "}
              </div>
              <div className="t m0 x2 h3 y76 ff1 fs0 fc0 sc0 ls0 ws0">
                order
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y3d ff1 fs0 fc0 sc0 ls0 ws0">
                The Mobile <span className="_ _0" />
                Application and Website allows you to check your order and
                correct any errors{" "}
              </div>
              <div className="t m0 x2 h3 y3e ff1 fs0 fc0 sc0 ls0 ws0">
                before completing a purchase. Please take the time to read and
                check your order at each{" "}
              </div>
              <div className="t m0 x2 h3 y3f ff1 fs0 fc0 sc0 ls0 ws0">
                page of the order process as you are responsible for ensuring
                that the information you{" "}
              </div>
              <div className="t m0 x2 h3 y40 ff1 fs0 fc0 sc0 ls0 ws0">
                provide is accurate (for example, the correct products,
                quantities, size, colour
                <span className="_ _0" />, etc.).
              </div>
              <div className="t m0 x2 h3 y41 ff1 fs0 fc0 sc0 ls0 ws0">
                (a) Formation of the contract between you and the Partner(s) The
                identity of the Partner is{" "}
              </div>
              <div className="t m0 x2 h3 y77 ff1 fs0 fc0 sc0 ls0 ws0">
                shown on the order conﬁrmation page when you place an order
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y43 ff1 fs0 fc0 sc0 ls0 ws0">
                When you place an order
                <span className="_ _0" />, you will receive an email, mobile
                message or other electronic{" "}
              </div>
              <div className="t m0 x2 h3 y44 ff1 fs0 fc0 sc0 ls0 ws0">
                messages, conﬁrming receipt and acceptance of your order
                <span className="_ _0" />. The contract between you{" "}
              </div>
              <div className="t m0 x2 h3 y45 ff1 fs0 fc0 sc0 ls0 ws0">
                and the Partner will be formed when we send this conﬁrmation
                email. <span className="_ _0" />
                All orders are subject{" "}
              </div>
              <div className="t m0 x2 h3 y46 ff1 fs0 fc0 sc0 ls0 ws0">
                to availability and conﬁrmation of the order price, and we may
                need to cancel your order{" "}
              </div>
              <div className="t m0 x2 h3 y47 ff1 fs0 fc0 sc0 ls0 ws0">
                (or part of your order) if the product is either not available,
                or not available at the order{" "}
              </div>
              <div className="t m0 x2 h3 y48 ff1 fs0 fc0 sc0 ls0 ws0">
                price. The conﬁrmation email will include a description of the
                products purchased in the{" "}
              </div>
              <div className="t m0 x2 h3 y49 ff1 fs0 fc0 sc0 ls0 ws0">
                order and certain other information about your rights to cancel
                the contract between you{" "}
              </div>
              <div className="t m0 x2 h3 y4a ff1 fs0 fc0 sc0 ls0 ws0">
                and the Partner (please see section 10 below for further
                information on your rights to{" "}
              </div>
              <div className="t m0 x2 h3 y78 ff1 fs0 fc0 sc0 ls0 ws0">
                cancel the contract).
              </div>
              <div className="t m0 x2 h3 y4c ff1 fs0 fc0 sc0 ls0 ws0">
                (b) Pricing, availability and taxes: Whilst we try and ensure
                that all details, descriptions and{" "}
              </div>
              <div className="t m0 x2 h3 y4d ff1 fs0 fc0 sc0 ls0 ws0">
                prices that appear on the Mobile <span className="_ _0" />
                Application and Website are accurate, as this information{" "}
              </div>
              <div className="t m0 x2 h3 y4e ff1 fs0 fc0 sc0 ls0 ws0">
                is provided to us by the Partners, there may be cases where
                errors occur
                <span className="_ _0" />. If we discover{" "}
              </div>
              <div className="t m0 x2 h3 y4f ff1 fs0 fc0 sc0 ls0 ws0">
                an error in the price of any products that you have ordered, we
                will inform you of this as{" "}
              </div>
              <div className="t m0 x2 h3 y50 ff1 fs0 fc0 sc0 ls0 ws0">
                soon as possible and, acting on behalf of the Partner
                <span className="_ _0" />, give you the option of reconﬁrming{" "}
              </div>
              <div className="t m0 x2 h3 y51 ff1 fs0 fc0 sc0 ls0 ws0">
                your order at the correct price or cancelling it. If we are
                unable to contact you, your order{" "}
              </div>
              <div className="t m0 x2 h3 y52 ff1 fs0 fc0 sc0 ls0 ws0">
                will be treated as cancelled. If you cancel and you have already
                paid for the products, you{" "}
              </div>
              <div className="t m0 x2 h3 y53 ff1 fs0 fc0 sc0 ls0 ws0">
                will receive a full refund as soon as possible.
              </div>
              <div className="t m0 x2 h3 y54 ff1 fs0 fc0 sc0 ls0 ws0">
                The product prices advertised on the Mobile{" "}
                <span className="_ _0" />
                Application and Website from Partners{" "}
              </div>
              <div className="t m0 x2 h3 y55 ff1 fs0 fc0 sc0 ls0 ws0">
                located within Italy are inclusive of the IV
                <span className="_ _4" />A<span className="_ _0" /> charged by
                the relevant Partner
                <span className="_ _0" />. Delivery costs{" "}
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf5" className="pf w0 h0" data-page-no={5}>
          <div className="pc pc5 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                are not included in the prices and will be charged in addition.
                The delivery costs (which will{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                include IV
                <span className="_ _4" />A<span className="_ _0" /> charged by
                us) will vary depending on the products that you have ordered
                and{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                your delivery address. Please see the “Shipping Information”
                section of our Orders and{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                Shipping page for further details. The delivery costs applicable
                to your order will be clearly{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                displayed at checkout before you place your order (and are
                included in the “T
                <span className="_ _1" />
                otal Cost”{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                amount shown on the order summary page) BARN or one of its
                afﬁliates will procure the{" "}
              </div>
              <div className="t m0 x2 h3 y31 ff1 fs0 fc0 sc0 ls0 ws0">
                payment processing Services.
              </div>
              <div className="t m0 x2 h3 y58 ff1 fs0 fc0 sc0 ls0 ws0">
                In the unlikely event that we or the Partner encounter a problem
                when processing your{" "}
              </div>
              <div className="t m0 x2 h3 y33 ff1 fs0 fc0 sc0 ls0 ws0">
                order
                <span className="_ _0" />, we will contact you and may possibly
                request further information, to try and resolve{" "}
              </div>
              <div className="t m0 x2 h3 y59 ff1 fs0 fc0 sc0 ls0 ws0">
                the issue.
              </div>
              <div className="t m0 x2 h3 y35 ff1 fs0 fc0 sc0 ls0 ws0">
                We reserve the right not to submit your order to the Partner
                <span className="_ _4" />, and the Partner reserve the{" "}
              </div>
              <div className="t m0 x2 h3 y36 ff1 fs0 fc0 sc0 ls0 ws0">
                right not to accept your order if, for example, the product
                ordered is out of stock, has been{" "}
              </div>
              <div className="t m0 x2 h3 y37 ff1 fs0 fc0 sc0 ls0 ws0">
                withdrawn or is otherwise not available, or if we are unable to
                obtain authorisation for your{" "}
              </div>
              <div className="t m0 x2 h3 y38 ff1 fs0 fc0 sc0 ls0 ws0">
                payment or if you do not meet the eligibility criteria (e.g. you
                are under 18).
              </div>
              <div className="t m0 x2 h3 y79 ff1 fs0 fc0 sc0 ls0 ws0">
                8) Delivery
              </div>
              <div className="t m0 x2 h3 y7a ff1 fs0 fc0 sc0 ls0 ws0">
                The estimated delivery date of the products will be stated in
                your order conﬁrmation email.{" "}
              </div>
              <div className="t m0 x2 h3 y7b ff1 fs0 fc0 sc0 ls0 ws0">
                If you do not receive an estimated delivery date from us, we
                will deliver the order within 4{" "}
              </div>
              <div className="t m0 x2 h3 y7c ff1 fs0 fc0 sc0 ls0 ws0">
                hours of the time of purchase. We (and not the Partners) supply
                delivery services to you{" "}
              </div>
              <div className="t m0 x2 h3 y7d ff1 fs0 fc0 sc0 ls0 ws0">
                and we will try to ensure that your order is delivered by the
                estimated delivery time if{" "}
              </div>
              <div className="t m0 x2 h3 y7e ff1 fs0 fc0 sc0 ls0 ws0">
                given,) but there may be circumstances where delivery is delayed
                because of events{" "}
              </div>
              <div className="t m0 x2 h3 y63 ff1 fs0 fc0 sc0 ls0 ws0">
                beyond our reasonable control (please see section 15 below for
                further information). If this{" "}
              </div>
              <div className="t m0 x2 h3 y64 ff1 fs0 fc0 sc0 ls0 ws0">
                happens, we will try and arrange for your products to be
                delivered as soon as possible, but{" "}
              </div>
              <div className="t m0 x2 h3 y65 ff1 fs0 fc0 sc0 ls0 ws0">
                we will not be liable to you for any losses caused as a result
                of such delay
                <span className="_ _4" />. Delivery times{" "}
              </div>
              <div className="t m0 x2 h3 y42 ff1 fs0 fc0 sc0 ls0 ws0">
                may vary depending on the availability of the products and your
                delivery address. Delivery{" "}
              </div>
              <div className="t m0 x2 h3 y43 ff1 fs0 fc0 sc0 ls0 ws0">
                times are estimates only and cannot be guaranteed.
              </div>
              <div className="t m0 x2 h3 y7f ff1 fs0 fc0 sc0 ls0 ws0">
                If no one is available at your address to sign for your order
                <span className="_ _0" />, the order will be returned to{" "}
              </div>
              <div className="t m0 x2 h3 y80 ff1 fs0 fc0 sc0 ls0 ws0">
                our Partner and the order will be cancelled, you will be charged
                the delivery costs for the{" "}
              </div>
              <div className="t m0 x2 h3 y66 ff1 fs0 fc0 sc0 ls0 ws0">
                item.
              </div>
              <div className="t m0 x2 h3 y81 ff1 fs0 fc0 sc0 ls0 ws0">
                In certain circumstances our delivery partner may provide you
                with optional services when{" "}
              </div>
              <div className="t m0 x2 h3 y82 ff1 fs0 fc0 sc0 ls0 ws0">
                delivering your order
                <span className="_ _0" />, such as: (a) signature release:
                opting out of the requirement to{" "}
              </div>
              <div className="t m0 x2 h3 y83 ff1 fs0 fc0 sc0 ls0 ws0">
                provide a signature on delivery; (b) leave with neighbour
                <span className="_ _0" />, reception or security: re-directing{" "}
              </div>
              <div className="t m0 x2 h3 y84 ff1 fs0 fc0 sc0 ls0 ws0">
                the delivery to a neighbour
                <span className="_ _0" />, reception or security; (c) reschedule
                a new delivery date:{" "}
              </div>
              <div className="t m0 x2 h3 y85 ff1 fs0 fc0 sc0 ls0 ws0">
                selecting a delivery date that best suits you; and/or (d)
                re-directing to a collection point:{" "}
              </div>
              <div className="t m0 x2 h3 y86 ff1 fs0 fc0 sc0 ls0 ws0">
                collecting your package from a collection point nearby
                <span className="_ _4" />. By selecting any of these services,{" "}
              </div>
              <div className="t m0 x2 h3 y6b ff1 fs0 fc0 sc0 ls0 ws0">
                including through any default preferences you may have selected
                with our delivery partner{" "}
              </div>
              <div className="t m0 x2 h3 y87 ff1 fs0 fc0 sc0 ls0 ws0">
                separately
                <span className="_ _4" />, you acknowledge and agree that BARN
                shall bear no responsibility or liability{" "}
              </div>
              <div className="t m0 x2 h3 y88 ff1 fs0 fc0 sc0 ls0 ws0">
                for any loss or damage that may result from delivering your
                order in that way
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 y6e ff1 fs0 fc0 sc0 ls0 ws0">
                10) Returns and Cancellation
              </div>
              <div className="t m0 x2 h3 y6f ff1 fs0 fc0 sc0 ls0 ws0">
                Please see our Returns &amp; Refunds Policy for information on
                returns. For further{" "}
              </div>
              <div className="t m0 x2 h3 y70 ff1 fs0 fc0 sc0 ls0 ws0">
                information on cancelling your order under the CCRs, please see
                below
                <span className="_ _0" />.
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf6" className="pf w0 h0" data-page-no={6}>
          <div className="pc pc6 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uza0QkAMQhEwSSc/TcsbLoIh8yUsD/ywJ1kAQAAMNcxAQAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4WcCAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCzwQAAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAJ77TAB/1t1VZQcYKYkRAHhjuzoAAACzefUEAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAISfCQAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAABB+AAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAAAA4QcAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8TAAAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAIPwAAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAADCDwAAAOEHAACA8AMAAED4AQAAIPwAAAAQfgAAAAg/AAAAhB8AAIDwAwAAQPgBAAAg/AAAABB+AAAACD8AAACEHwAAAMIPAABA+AEAACD8AAAAEH4AAAAIPwAAAIQfAAAAwg8AAADhBwAAgPADAAAQfgAAAAg/AAAAhB8AAADCDwAAAOEHAACA8AMAAED4AQAACD8AAACEHwAAAMIPAAAA4QcAAIDwAwAAQPgBAAAg/AAAAIQfAAAAwg8AAADhBwAAgPADAABA+AEAACD8AAAAEH4AAAAIPwAAAOEHcNuvgxqAQSCKgrukAvCvsgJIPyZI6GFGwrs9AACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxkwAAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPGTAAAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAJj38L0AAAA8SURBVAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAA/EJLAAAA3Dbm872rKkl1dyUR5aANE0EiIY7iHUAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                Cancelling under the Consumer Contracts Regulations
              </div>
              <div className="t m0 x2 h3 y89 ff1 fs0 fc0 sc0 ls0 ws0">
                Depending on where you live, you have a legal right to cancel
                your order under the{" "}
              </div>
              <div className="t m0 x2 h3 y8a ff1 fs0 fc0 sc0 ls0 ws0">
                Consumer Contracts (Information, Cancellation and{" "}
                <span className="_ _0" />
                Additional Charges) Regulations 2013{" "}
              </div>
              <div className="t m0 x2 h3 y8b ff1 fs0 fc0 sc0 ls0 ws0">
                (“CCRs”) or equivalent consumer legislation in the EU. This
                means that, during a certain{" "}
              </div>
              <div className="t m0 x2 h3 y8c ff1 fs0 fc0 sc0 ls0 ws0">
                cancellation period, if you change your mind or for any other
                reason you decide you do not{" "}
              </div>
              <div className="t m0 x2 h3 y56 ff1 fs0 fc0 sc0 ls0 ws0">
                want to keep the purchased products, you can notify us of your
                decision to cancel the{" "}
              </div>
              <div className="t m0 x2 h3 y57 ff1 fs0 fc0 sc0 ls0 ws0">
                order
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y8d ff1 fs0 fc0 sc0 ls0 ws0">
                Once the products are returned to the relevant Partner you will
                receive a full refund,{" "}
              </div>
              <div className="t m0 x2 h3 y8e ff1 fs0 fc0 sc0 ls0 ws0">
                including the original delivery costs; however you will be
                liable to arrange and cover the full{" "}
              </div>
              <div className="t m0 x2 h3 y34 ff1 fs0 fc0 sc0 ls0 ws0">
                cost of returning the order to the Partner
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y8f ff1 fs0 fc0 sc0 ls0 ws0">
                How to cancel under the CCRs: Except in relation to certain
                types of products as set out in{" "}
              </div>
              <div className="t m0 x2 h3 y90 ff1 fs0 fc0 sc0 ls0 ws0">
                the Returns Policy
                <span className="_ _4" />, you may cancel a contract at any time
                before your order is delivered{" "}
              </div>
              <div className="t m0 x2 h3 y91 ff1 fs0 fc0 sc0 ls0 ws0">
                and up to 14 days afterwards, beginning on the day after you
                received the products{" "}
              </div>
              <div className="t m0 x2 h3 y92 ff1 fs0 fc0 sc0 ls0 ws0">
                (“cooling-off period”).
              </div>
              <div className="t m0 x2 h3 y93 ff1 fs0 fc0 sc0 ls0 ws0">
                T<span className="_ _1" />o cancel a contract, you must clearly
                inform us, preferably:
              </div>
              <div className="t m0 x3 h3 y94 ff1 fs0 fc0 sc0 ls0 ws0">
                •<span className="_ _5"> </span>By email to
                barntechnologies0@gmail.com , giving us your name, address and{" "}
              </div>
              <div className="t m0 x4 h3 y95 ff1 fs0 fc0 sc0 ls0 ws0">
                order reference; or
              </div>
              <div className="t m0 x3 h3 y96 ff1 fs0 fc0 sc0 ls0 ws0">
                •<span className="_ _5"> </span>By completing and returning the
                cancellation form set out at the end of this section{" "}
              </div>
              <div className="t m0 x4 h3 y97 ff1 fs0 fc0 sc0 ls0 ws0">
                and sending it to the address set out in the form.
              </div>
              <div className="t m0 x2 h3 y98 ff1 fs0 fc0 sc0 ls0 ws0">
                If you cancel an order (or part of an order) during the cooling
                off period, you must return{" "}
              </div>
              <div className="t m0 x2 h3 y99 ff1 fs0 fc0 sc0 ls0 ws0">
                the product(s) within 14 days after the day on which you notify
                us of the cancellation, and{" "}
              </div>
              <div className="t m0 x2 h3 y9a ff1 fs0 fc0 sc0 ls0 ws0">
                ensure the item(s) comply with the conditions of our Returns
                Policy
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 y9b ff1 fs0 fc0 sc0 ls0 ws0">
                If you cancel a contract between us within the 14-day
                cooling-off period, we will process{" "}
              </div>
              <div className="t m0 x2 h3 y9c ff1 fs0 fc0 sc0 ls0 ws0">
                the refund due to you as soon as possible. In any case your
                refund will be completed{" "}
              </div>
              <div className="t m0 x2 h3 y9d ff1 fs0 fc0 sc0 ls0 ws0">
                within 14 days after the day on which the Partner received your
                return, or if earlier
                <span className="_ _0" />, the day{" "}
              </div>
              <div className="t m0 x2 h3 y9e ff1 fs0 fc0 sc0 ls0 ws0">
                on which we receive evidence that you have returned the
                product(s) to the relevant{" "}
              </div>
              <div className="t m0 x2 h3 y9f ff1 fs0 fc0 sc0 ls0 ws0">
                Partner
                <span className="_ _3" />
                ’s address. Y<span className="_ _1" />
                ou will have to bear the full cost of returning the product(s)
                to the{" "}
              </div>
              <div className="t m0 x2 h3 ya0 ff1 fs0 fc0 sc0 ls0 ws0">
                Partner
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 ya1 ff1 fs0 fc0 sc0 ls0 ws0">
                Model withdrawal / cancellation form
              </div>
              <div className="t m0 x2 h3 ya2 ff1 fs0 fc0 sc0 ls0 ws0">
                (Complete and return this form only if you wish to withdraw from
                the contract)
              </div>
              <div className="t m0 x2 h3 ya3 ff1 fs0 fc0 sc0 ls0 ws0">
                T<span className="_ _1" />
                o: Notice of Contract Cancellation, Customer Services, BARN,
                copied to{" "}
              </div>
              <div className="t m0 x2 h3 ya4 ff1 fs0 fc0 sc0 ls0 ws0">
                barntechnologies0@gmail.com
              </div>
              <div className="t m0 x2 h3 ya5 ff1 fs0 fc0 sc0 ls0 ws0">
                I/We hereby give notice that I/W
                <span className="_ _0" />e cancel my/our contract of sale of the
                following goods/for{" "}
              </div>
              <div className="t m0 x2 h3 ya6 ff1 fs0 fc0 sc0 ls0 ws0">
                the supply of the following service*
              </div>
              <div className="t m0 x2 h3 ya7 ff1 fs0 fc0 sc0 ls0 ws0">
                *please delete as appropriate<span className="ff2">!</span>
              </div>
              <div className="t m0 x2 h3 ya8 ff1 fs0 fc0 sc0 ls0 ws0">
                Ordered On:<span className="ff2">!</span>
              </div>
            </div>
            <a className="l" href="mailto:barntechnologies0@gmail.com">
              <div
                className="d m1"
                style={{
                  borderStyle: "none",
                  position: "absolute",
                  left: "233.062500px",
                  bottom: "691.775700px",
                  width: "164.937500px",
                  height: "14.000000px",
                  backgroundColor: "rgba(255,255,255,0.000001)",
                }}
              />
            </a>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf7" className="pf w0 h0" data-page-no={7}>
          <div className="pc pc7 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                Received On:<span className="ff2">!</span>
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                Name of consumer(s):<span className="ff2">!</span>
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                Address of consumer(s):<span className="ff2">!</span>
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                Signature of the consumer(s) (only in case of notiﬁcation of
                this form on paper):<span className="ff2">!</span>
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls1 ws0">
                Date:
              </div>
              <div className="t m0 x2 h3 y56 ff1 fs0 fc0 sc0 ls0 ws0">
                1<span className="_ _4" />
                1) Our Website
              </div>
              <div className="t m0 x2 h3 ya9 ff1 fs0 fc0 sc0 ls0 ws0">
                This section sets out the rules that apply to your use of the
                Mobile <span className="_ _0" />
                Application or Website{" "}
              </div>
              <div className="t m0 x2 h3 y8d ff1 fs0 fc0 sc0 ls0 ws0">
                (whether or not you use it to order products or just to browse).
                By using the Mobile{" "}
              </div>
              <div className="t m0 x2 h3 y8e ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website, you agree to these rules. If you do not
                agree to these rules, you{" "}
              </div>
              <div className="t m0 x2 h3 y34 ff1 fs0 fc0 sc0 ls0 ws0">
                are not permitted to use the Mobile <span className="_ _0" />
                Application or Website and you should leave it{" "}
              </div>
              <div className="t m0 x2 h3 y35 ff1 fs0 fc0 sc0 ls0 ws0">
                immediately
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 y90 ff1 fs0 fc0 sc0 ls0 ws0">
                (a) <span className="_ _0" />
                Access to the Mobile <span className="_ _4" />
                Ap
                <span className="_ _3" />
                plication or Website: <span className="_ _0" />
                The Mobile <span className="_ _0" />
                Application and Website is{" "}
              </div>
              <div className="t m0 x2 h3 y91 ff1 fs0 fc0 sc0 ls0 ws0">
                made available free of charge and you are responsible for making
                all arrangements{" "}
              </div>
              <div className="t m0 x2 h3 y92 ff1 fs0 fc0 sc0 ls0 ws0">
                necessary for you to have access to the Mobile{" "}
                <span className="_ _0" />
                Application and Website. <span className="_ _0" />Y
                <span className="_ _4" />
                ou are also{" "}
              </div>
              <div className="t m0 x2 h3 y79 ff1 fs0 fc0 sc0 ls0 ws0">
                responsible for ensuring that all persons who access the Mobile{" "}
                <span className="_ _0" />
                Application and Website{" "}
              </div>
              <div className="t m0 x2 h3 yaa ff1 fs0 fc0 sc0 ls0 ws0">
                through your internet connection are aware of these T
                <span className="_ _1" />
                erms and Conditions, and that they{" "}
              </div>
              <div className="t m0 x2 h3 yab ff1 fs0 fc0 sc0 ls0 ws0">
                comply with them.
              </div>
              <div className="t m0 x2 h3 y7c ff1 fs0 fc0 sc0 ls0 ws0">
                Access to the Mobile <span className="_ _0" />
                Application or Website is permitted on a temporary basis and it
                does{" "}
              </div>
              <div className="t m0 x2 h3 y7d ff1 fs0 fc0 sc0 ls0 ws0">
                not include any commercial use of the Mobile{" "}
                <span className="_ _0" />
                Application or Website or its contents.{" "}
                <span className="_ _0" />Y
                <span className="_ _4" />
                ou{" "}
              </div>
              <div className="t m0 x2 h3 y7e ff1 fs0 fc0 sc0 ls0 ws0">
                must not reproduce, copy and/or exploit the Mobile{" "}
                <span className="_ _0" />
                Application or Website for any{" "}
              </div>
              <div className="t m0 x2 h3 y63 ff1 fs0 fc0 sc0 ls0 ws0">
                commercial purposes without our prior written consent.
              </div>
              <div className="t m0 x2 h3 y9a ff1 fs0 fc0 sc0 ls0 ws0">
                We reserve the right to withdraw or amend the Mobile{" "}
                <span className="_ _4" />
                Application or Website without{" "}
              </div>
              <div className="t m0 x2 h3 yac ff1 fs0 fc0 sc0 ls0 ws0">
                notice and, from time to time, we may restrict access to all or
                parts of the Mobile{" "}
              </div>
              <div className="t m0 x2 h3 yad ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website. W<span className="_ _0" />e will not be
                liable to you if, for any reason
                <span className="_ _3" />, the Mobile{" "}
              </div>
              <div className="t m0 x2 h3 yae ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website is unavailable at any time or for any
                period.
              </div>
              <div className="t m0 x2 h3 y9e ff1 fs0 fc0 sc0 ls0 ws0">
                When you visit the Mobile <span className="_ _0" />
                Application or Website and/or submit an order
                <span className="_ _4" />, you are{" "}
              </div>
              <div className="t m0 x2 h3 y9f ff1 fs0 fc0 sc0 ls0 ws0">
                communicating with us electronically and you agree that all
                agreements, notices,{" "}
              </div>
              <div className="t m0 x2 h3 ya0 ff1 fs0 fc0 sc0 ls0 ws0">
                disclosures and other communications that we send to you
                electronically (whether on our{" "}
              </div>
              <div className="t m0 x2 h3 y81 ff1 fs0 fc0 sc0 ls0 ws0">
                behalf or on behalf of the Partners) satisfy any legal
                requirement that same{" "}
              </div>
              <div className="t m0 x2 h3 y82 ff1 fs0 fc0 sc0 ls0 ws0">
                communications be in writing.
              </div>
              <div className="t m0 x2 h3 yaf ff1 fs0 fc0 sc0 ls0 ws0">
                (b) Y<span className="_ _1" />
                our conduct: Y<span className="_ _1" />
                ou must not use the Mobile <span className="_ _0" />
                Application or Website in any way that{" "}
              </div>
              <div className="t m0 x2 h3 yb0 ff1 fs0 fc0 sc0 ls0 ws0">
                causes, or is likely to cause, the Mobile{" "}
                <span className="_ _0" />
                Application or Website or access to it to be{" "}
              </div>
              <div className="t m0 x2 h3 yb1 ff1 fs0 fc0 sc0 ls0 ws0">
                interrupted, damaged or impaired in any way
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 yb2 ff1 fs0 fc0 sc0 ls0 ws0">
                Y<span className="_ _1" />
                ou understand that you are responsible for all electron
                <span className="_ _3" />
                ic communications and content{" "}
              </div>
              <div className="t m0 x2 h3 yb3 ff1 fs0 fc0 sc0 ls0 ws0">
                sent from your computer to us and you must use the Mobile{" "}
                <span className="_ _0" />
                Application or Website for{" "}
              </div>
              <div className="t m0 x2 h3 yb4 ff1 fs0 fc0 sc0 ls0 ws0">
                lawful purposes only
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 yb5 ff1 fs0 fc0 sc0 ls0 ws0">
                Y<span className="_ _1" />
                ou must not use the Mobile <span className="_ _0" />
                Application or Website for any of the following:
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf8" className="pf w0 h0" data-page-no={8}>
          <div className="pc pc8 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                In any way that breaches any applicable local, national or
                international law or regulation. In{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                any way that is unlawful or fraudulent, or has any unlawful or
                fraudulent purpose or effect.{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                T<span className="_ _1" />o send, use or reuse any material that
                is: (i) illegal, offensive, abusive, indecent,{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                defamatory
                <span className="_ _4" />, obscene or menacing, and/or (ii) in
                breach of copyright, trademark,{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                conﬁdence, privacy or any other right, and/or (iii) otherwise
                injurious to third parties, and/or{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                (iv) objectionable, and/or (v) which consists of or contains
                software viruses, political{" "}
              </div>
              <div className="t m0 x2 h3 y31 ff1 fs0 fc0 sc0 ls0 ws0">
                campaigning, commercial solicitation, chain letters, mass
                mailings or any “spam”. T<span className="_ _1" />o cause{" "}
              </div>
              <div className="t m0 x2 h3 y32 ff1 fs0 fc0 sc0 ls0 ws0">
                harm, annoyance, inconvenience or needless anxiety to any
                person.
              </div>
              <div className="t m0 x2 h3 y33 ff1 fs0 fc0 sc0 ls0 ws0">
                Breaching these provisions would constitute a criminal offence
                under the Computer{" "}
              </div>
              <div className="t m0 x2 h3 y59 ff1 fs0 fc0 sc0 ls0 ws0">
                Misuse <span className="_ _0" />
                Act 1990. We, in compliance with any enforceable law or public
                order
                <span className="_ _4" />, will report{" "}
              </div>
              <div className="t m0 x2 h3 y5a ff1 fs0 fc0 sc0 ls0 ws0">
                any such breach to the relevant law enforcement authorities and
                disclose your identity to{" "}
              </div>
              <div className="t m0 x2 h3 y5b ff1 fs0 fc0 sc0 ls0 ws0">
                them. If you breach any of the T<span className="_ _1" />
                erms and Conditions and/or any <span className="_ _0" />
                Third Party Products and{" "}
              </div>
              <div className="t m0 x2 h3 y5c ff1 fs0 fc0 sc0 ls0 ws0">
                Services’
                <span className="_ _0" /> terms and conditions, you will
                indemnify us in full against all costs, expen
                <span className="_ _3" />
                ses,{" "}
              </div>
              <div className="t m0 x2 h3 y5d ff1 fs0 fc0 sc0 ls0 ws0">
                liabilities, damages and losses (excluding any indirect,
                incidental or consequential loss),{" "}
              </div>
              <div className="t m0 x2 h3 y5e ff1 fs0 fc0 sc0 ls0 ws0">
                including any interest, ﬁnes and legal or other professional
                fees and expenses awarded{" "}
              </div>
              <div className="t m0 x2 h3 y5f ff1 fs0 fc0 sc0 ls0 ws0">
                against or incurred or paid by us and/or any member of our group
                as a result of or in{" "}
              </div>
              <div className="t m0 x2 h3 y75 ff1 fs0 fc0 sc0 ls0 ws0">
                connection with your breach.
              </div>
              <div className="t m0 x2 h3 y3c ff1 fs0 fc0 sc0 ls0 ws0">
                (c) Third Party Products and Services on the Mobile{" "}
                <span className="_ _4" />
                Application or Website
              </div>
              <div className="t m0 x2 h3 y61 ff1 fs0 fc0 sc0 ls0 ws0">
                The Mobile <span className="_ _0" />
                Application or Website may contain services and/or products
                (including add-
              </div>
              <div className="t m0 x2 h3 y62 ff1 fs0 fc0 sc0 ls0 ws0">
                ons and applications) offered by third parties other than our
                Partners (the “Third Party{" "}
              </div>
              <div className="t m0 x2 h3 yb6 ff1 fs0 fc0 sc0 ls0 ws0">
                Products and Services”). Y<span className="_ _1" />
                our use of these Third Party Products and Services may be{" "}
              </div>
              <div className="t m0 x2 h3 yb7 ff1 fs0 fc0 sc0 ls0 ws0">
                subject to additional terms and conditions which we recommend
                you review before ﬁrst{" "}
              </div>
              <div className="t m0 x2 h3 y41 ff1 fs0 fc0 sc0 ls0 ws0">
                using such Third Party Products and Services and continue to
                review for any changes. W<span className="_ _2" />e{" "}
              </div>
              <div className="t m0 x2 h3 y77 ff1 fs0 fc0 sc0 ls0 ws0">
                disclaim any responsibility or liability for or in connection
                with your use of any Third Party{" "}
              </div>
              <div className="t m0 x2 h3 yb8 ff1 fs0 fc0 sc0 ls0 ws0">
                Products and Services. We reserve the right to suspend, withdraw
                <span className="_ _4" />, terminate and/or{" "}
              </div>
              <div className="t m0 x2 h3 yb9 ff1 fs0 fc0 sc0 ls0 ws0">
                amend your access to the Websites and/or Services, including but
                not limited to <span className="_ _2" />
                Third{" "}
              </div>
              <div className="t m0 x2 h3 yba ff1 fs0 fc0 sc0 ls0 ws0">
                Party Products and Services, in the event that you breach any
                Third Party Products and{" "}
              </div>
              <div className="t m0 x2 h3 ybb ff1 fs0 fc0 sc0 ls0 ws0">
                Services’
                <span className="_ _0" /> terms and conditions. Use of Third
                Party Products and Services is entirely at{" "}
              </div>
              <div className="t m0 x2 h3 ybc ff1 fs0 fc0 sc0 ls0 ws0">
                your own risk.
              </div>
              <div className="t m0 x2 h3 y48 ff1 fs0 fc0 sc0 ls0 ws0">
                We make no guarantee that any or all features of the W
                <span className="_ _0" />
                ebsites, Services or Third Party{" "}
              </div>
              <div className="t m0 x2 h3 y49 ff1 fs0 fc0 sc0 ls0 ws0">
                Products and Services will work on any particular device.
              </div>
              <div className="t m0 x2 h3 y6a ff1 fs0 fc0 sc0 ls0 ws0">
                (d) Linking: We are happy for you to link to the Mobile{" "}
                <span className="_ _4" />
                Application or Website but you must{" "}
              </div>
              <div className="t m0 x2 h3 y4b ff1 fs0 fc0 sc0 ls0 ws0">
                do so in a way that is fair and legal and does not damage our
                reputation or take advantage{" "}
              </div>
              <div className="t m0 x2 h3 y4c ff1 fs0 fc0 sc0 ls0 ws0">
                of it (such as by using a link to suggest any form of
                association or endorsement by us). We{" "}
              </div>
              <div className="t m0 x2 h3 y4d ff1 fs0 fc0 sc0 ls0 ws0">
                reserve the right to withdraw linking permission at any time
                and, if we instruct you to{" "}
              </div>
              <div className="t m0 x2 h3 y4e ff1 fs0 fc0 sc0 ls0 ws0">
                remove a link to the Mobile <span className="_ _0" />
                Application or Website, you must do so without delay
                <span className="_ _1" />.
              </div>
              <div className="t m0 x2 h3 y88 ff1 fs0 fc0 sc0 ls0 ws0">
                Where the Mobile <span className="_ _0" />
                Application or Website contains links to other websites and
                resources{" "}
              </div>
              <div className="t m0 x2 h3 ybd ff1 fs0 fc0 sc0 ls0 ws0">
                provided by third parties, these links are provided for your
                information only
                <span className="_ _4" />. We have no{" "}
              </div>
              <div className="t m0 x2 h3 ybe ff1 fs0 fc0 sc0 ls0 ws0">
                control over the contents of those websites or resources and
                such links should not be{" "}
              </div>
              <div className="t m0 x2 h3 ybf ff1 fs0 fc0 sc0 ls0 ws0">
                interpreted as an endorsement by us of those linked websites. We
                will not be liable for any{" "}
              </div>
              <div className="t m0 x2 h3 yc0 ff1 fs0 fc0 sc0 ls0 ws0">
                loss or damage that may arise from your use of them.
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf9" className="pf w0 h0" data-page-no={9}>
          <div className="pc pc9 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                (e) Our liability in relation to the Mobile{" "}
                <span className="_ _0" />
                Application or Website: W<span className="_ _0" />e may update
                or change{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                the Mobile <span className="_ _0" />
                Application or Website or its contents at any time but we are
                under no{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                obligation to do so. Please note that this means any of the
                content on the Mobile{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website may be out-of-date at any given time.{" "}
                <span className="_ _0" />
                The content on the Mob
                <span className="_ _3" />
                ile{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website is provided for general information only
                <span className="_ _4" />. It is not intended to amount{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                to advice on which you should rely
                <span className="_ _4" />. We make no representations,
                warranties or{" "}
              </div>
              <div className="t m0 x2 h3 y31 ff1 fs0 fc0 sc0 ls0 ws0">
                guarantees, whether express or implied, that the Mobile{" "}
                <span className="_ _0" />
                Application or Website, or any{" "}
              </div>
              <div className="t m0 x2 h3 y32 ff1 fs0 fc0 sc0 ls0 ws0">
                content on it, is accurate, complete, up-to-date or will be free
                from errors or omissions. T<span className="_ _1" />o{" "}
              </div>
              <div className="t m0 x2 h3 y71 ff1 fs0 fc0 sc0 ls0 ws0">
                the fullest extent permitted by law
                <span className="_ _0" />, we exclude all conditions,
                warranties, representations{" "}
              </div>
              <div className="t m0 x2 h3 y72 ff1 fs0 fc0 sc0 ls0 ws0">
                or other terms which may apply to the Mobile{" "}
                <span className="_ _0" />
                Application or Website, or any content on it,{" "}
              </div>
              <div className="t m0 x2 h3 y73 ff1 fs0 fc0 sc0 ls0 ws0">
                whether express or implied.
              </div>
              <div className="t m0 x2 h3 y5b ff1 fs0 fc0 sc0 ls0 ws0">
                We will not be liable to you or any user for any loss or damage,
                whether in contract, tort{" "}
              </div>
              <div className="t m0 x2 h3 y5c ff1 fs0 fc0 sc0 ls0 ws0">
                (including negligence), breach of statutory duty
                <span className="_ _4" />, or otherwise, arising under or in{" "}
              </div>
              <div className="t m0 x2 h3 y5d ff1 fs0 fc0 sc0 ls0 ws0">
                connection with: (i) use of, or inability to use, the Website;
                or (ii) use of or reliance on any{" "}
              </div>
              <div className="t m0 x2 h3 y5e ff1 fs0 fc0 sc0 ls0 ws0">
                content displayed on the Mobile <span className="_ _0" />
                Application or Website.
              </div>
              <div className="t m0 x2 h3 y3a ff1 fs0 fc0 sc0 ls0 ws0">
                Please note that we only provide the Mobile{" "}
                <span className="_ _0" />
                Application or Website for domestic and{" "}
              </div>
              <div className="t m0 x2 h3 y3b ff1 fs0 fc0 sc0 ls0 ws0">
                private use and, as such, we have no liability to you for any
                loss of proﬁt, loss of business,{" "}
              </div>
              <div className="t m0 x2 h3 y3c ff1 fs0 fc0 sc0 ls0 ws0">
                business interruption, or loss of business opportunity
                <span className="_ _4" />.
              </div>
              <div className="t m0 x2 h3 y61 ff1 fs0 fc0 sc0 ls0 ws0">
                We will not be liable for any loss or damage caused by a virus,
                distributed denial-of-service{" "}
              </div>
              <div className="t m0 x2 h3 y62 ff1 fs0 fc0 sc0 ls0 ws0">
                attack, or other technologically harmful material that may
                infect your computer equipment,{" "}
              </div>
              <div className="t m0 x2 h3 yb6 ff1 fs0 fc0 sc0 ls0 ws0">
                computer programs, data or other proprietary material due to
                your use of the Mobile{" "}
              </div>
              <div className="t m0 x2 h3 yb7 ff1 fs0 fc0 sc0 ls0 ws0">
                Application or Website or to your downloading of any content on
                it, or on any website{" "}
              </div>
              <div className="t m0 x2 h3 y41 ff1 fs0 fc0 sc0 ls0 ws0">
                linked to it. We do not in any way exclude or limit our
                liability for: 1. death or personal injury{" "}
              </div>
              <div className="t m0 x2 h3 y77 ff1 fs0 fc0 sc0 ls0 ws0">
                caused by our negligence; 2. fraud or fraudulent
                misrepresentation; 3. any other liability{" "}
              </div>
              <div className="t m0 x2 h3 yb8 ff1 fs0 fc0 sc0 ls0 ws0">
                which cannot be limited by law
                <span className="_ _0" />. Different limitations and exclusions
                of liability will apply to{" "}
              </div>
              <div className="t m0 x2 h3 yb9 ff1 fs0 fc0 sc0 ls0 ws0">
                liability arising as a result of our supply of the Services to
                you (as set out in section 4) and{" "}
              </div>
              <div className="t m0 x2 h3 yba ff1 fs0 fc0 sc0 ls0 ws0">
                the Partners’
                <span className="_ _0" /> supply of the products to you.
              </div>
              <div className="t m0 x2 h3 y46 ff1 fs0 fc0 sc0 ls0 ws0">
                12) Privacy Policy
              </div>
              <div className="t m0 x2 h3 y67 ff1 fs0 fc0 sc0 ls0 ws0">
                We only use your personal information in accordance with our
                Privacy Policy
                <span className="_ _4" />. Please take{" "}
              </div>
              <div className="t m0 x2 h3 y68 ff1 fs0 fc0 sc0 ls0 ws0">
                the time to read this carefully
                <span className="_ _4" />, as it includes important information
                about how we collect{" "}
              </div>
              <div className="t m0 x2 h3 y69 ff1 fs0 fc0 sc0 ls0 ws0">
                and use your data. By using the Mobile <span className="_ _0" />
                Application or Website, you consent to the use of{" "}
              </div>
              <div className="t m0 x2 h3 y6a ff1 fs0 fc0 sc0 ls0 ws0">
                your data as described in our Privacy Policy and you warrant
                that all data provided by you{" "}
              </div>
              <div className="t m0 x2 h3 y4b ff1 fs0 fc0 sc0 ls0 ws0">
                is accurate.
              </div>
              <div className="t m0 x2 h3 y86 ff1 fs0 fc0 sc0 ls0 ws0">
                13) Intellectual property
                <span className="_ _4" />, software and content
              </div>
              <div className="t m0 x2 h3 yc1 ff1 fs0 fc0 sc0 ls0 ws0">
                We are the owner or the licensee of all intellectual property
                rights in the Mobile <span className="_ _4" />
                Application{" "}
              </div>
              <div className="t m0 x2 h3 y6c ff1 fs0 fc0 sc0 ls0 ws0">
                or Website and its content (such as text, graphics, logos,
                button icons, images, audio clips,{" "}
              </div>
              <div className="t m0 x2 h3 y6d ff1 fs0 fc0 sc0 ls0 ws0">
                digital downloads, data compilations and software including the
                presentation and{" "}
              </div>
              <div className="t m0 x2 h3 y6e ff1 fs0 fc0 sc0 ls0 ws0">
                compilation of the same) (“Content”). The rights in the Mobile{" "}
                <span className="_ _4" />
                Application or Website and{" "}
              </div>
              <div className="t m0 x2 h3 yc2 ff1 fs0 fc0 sc0 ls0 ws0">
                the Content are protected by international copyright laws as
                well as by any relevant{" "}
              </div>
              <div className="t m0 x2 h3 yc3 ff1 fs0 fc0 sc0 ls0 ws0">
                national law concerning copyright, authors’
                <span className="_ _0" /> rights and databa
                <span className="_ _3" />
                se right laws. <span className="_ _0" />
                All such rights{" "}
              </div>
              <div className="t m0 x2 h3 yc4 ff1 fs0 fc0 sc0 ls0 ws0">
                are reserved.
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pfa" className="pf w0 h0" data-page-no="a">
          <div className="pc pca w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                Y<span className="_ _1" />
                ou must not systematically extract and/or re-utilise parts of
                the Mobile <span className="_ _0" />
                Application or{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                Website or the Content. In particular
                <span className="_ _4" />, you must not use any data mining,
                robots, or similar{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                data gathering and extraction tools to extract (whether once or
                many times) for re-
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                utilisation any substantial parts of the Mobile{" "}
                <span className="_ _0" />
                Application or Website. <span className="_ _0" />Y
                <span className="_ _4" />
                ou must not create{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                and/or publish your own database that features substantial parts
                of the Mobile <span className="_ _0" />
                Application{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                or Website (e.g. our prices and product listings) without our
                prior written consent.
              </div>
              <div className="t m0 x2 h3 y57 ff1 fs0 fc0 sc0 ls0 ws0">
                Except where expressly stated to the contrary
                <span className="_ _4" />, all persons (including their names
                and{" "}
              </div>
              <div className="t m0 x2 h3 y58 ff1 fs0 fc0 sc0 ls0 ws0">
                images), third party trademarks and images of third party
                products, services and/or{" "}
              </div>
              <div className="t m0 x2 h3 y33 ff1 fs0 fc0 sc0 ls0 ws0">
                locations featured on the Mobile <span className="_ _0" />
                Application or Website are in no way associated, linked or{" "}
              </div>
              <div className="t m0 x2 h3 y59 ff1 fs0 fc0 sc0 ls1 ws0">
                af
                <span className="ls0">
                  ﬁliated with us. <span className="_ _0" />
                  Any trademarks/names featured on the Website are owned by the{" "}
                </span>
              </div>
              <div className="t m0 x2 h3 y5a ff1 fs0 fc0 sc0 ls0 ws0">
                respective trademark owners.
              </div>
              <div className="t m0 x2 h3 y36 ff1 fs0 fc0 sc0 ls0 ws0">
                14) Ethical sourcing policy
              </div>
              <div className="t m0 x2 h3 y91 ff1 fs0 fc0 sc0 ls0 ws0">
                As a reputable and trusted business committed to offering its
                customers high-quality{" "}
              </div>
              <div className="t m0 x2 h3 y92 ff1 fs0 fc0 sc0 ls0 ws0">
                products, we recognise our obligation to ensure that all
                Partners and other suppliers are{" "}
              </div>
              <div className="t m0 x2 h3 y79 ff1 fs0 fc0 sc0 ls0 ws0">
                operating ethically
                <span className="_ _4" />. We expect all Partners and other
                suppliers to consistently provide an{" "}
              </div>
              <div className="t m0 x2 h3 yaa ff1 fs0 fc0 sc0 ls0 ws0">
                environment which protects their employees’
                <span className="_ _0" /> health and safety and basic hu
                <span className="_ _3" />
                man rights. <span className="_ _0" />
                All{" "}
              </div>
              <div className="t m0 x2 h3 yab ff1 fs0 fc0 sc0 ls0 ws0">
                Partners and other suppliers are expected to comply with their
                national employment laws{" "}
              </div>
              <div className="t m0 x2 h3 y60 ff1 fs0 fc0 sc0 ls0 ws0">
                and regulations with particular regard to: minimum age of
                employment, freely chosen{" "}
              </div>
              <div className="t m0 x2 h3 y61 ff1 fs0 fc0 sc0 ls0 ws0">
                employment, health and safety
                <span className="_ _4" />, freedom of association and the right
                to collective{" "}
              </div>
              <div className="t m0 x2 h3 y62 ff1 fs0 fc0 sc0 ls0 ws0">
                bargaining, no discrimination, no harsh or inhumane treatment,
                working hours, rates of pay{" "}
              </div>
              <div className="t m0 x2 h3 yb6 ff1 fs0 fc0 sc0 ls0 ws0">
                and terms of employment.
              </div>
              <div className="t m0 x2 h3 y64 ff1 fs0 fc0 sc0 ls0 ws0">
                We will never knowingly allow a Partner to of
                <span className="_ _0" />
                fer its produ
                <span className="_ _3" />
                cts on the Website if such{" "}
              </div>
              <div className="t m0 x2 h3 y65 ff1 fs0 fc0 sc0 ls0 ws0">
                products are sourced from countries which are in breach of these
                principles. We also look{" "}
              </div>
              <div className="t m0 x2 h3 y42 ff1 fs0 fc0 sc0 ls0 ws0">
                to the Partners and other suppliers to instil these principles
                when dealing with their own{" "}
              </div>
              <div className="t m0 x2 h3 y43 ff1 fs0 fc0 sc0 ls0 ws0">
                supplier base. Because of the sometimes complex nature of the
                Partners and other{" "}
              </div>
              <div className="t m0 x2 h3 y44 ff1 fs0 fc0 sc0 ls0 ws0">
                suppliers’
                <span className="_ _0" /> supply chain, it is not always
                possible to monitor and control the con
                <span className="_ _3" />
                ditions of{" "}
              </div>
              <div className="t m0 x2 h3 y45 ff1 fs0 fc0 sc0 ls0 ws0">
                each individual involved in the production of the products.
                However
                <span className="_ _0" />, as we continue to{" "}
              </div>
              <div className="t m0 x2 h3 y46 ff1 fs0 fc0 sc0 ls0 ws0">
                grow
                <span className="_ _0" />, we recognise the importance of being
                proactive and doing everything within our{" "}
              </div>
              <div className="t m0 x2 h3 y47 ff1 fs0 fc0 sc0 ls0 ws0">
                power to support the rights of those involved in the manufacture
                of the products.
              </div>
              <div className="t m0 x2 h3 y68 ff1 fs0 fc0 sc0 ls0 ws0">
                18) Other important information
              </div>
              <div className="t m0 x2 h3 y83 ff1 fs0 fc0 sc0 ls0 ws0">
                We reserve the right to close your Milano Delivery account or
                restrict future orders at any{" "}
              </div>
              <div className="t m0 x2 h3 y84 ff1 fs0 fc0 sc0 ls0 ws0">
                time in our sole discretion.
              </div>
              <div className="t m0 x2 h3 yb1 ff1 fs0 fc0 sc0 ls0 ws0">
                Severability – Each of the sections and paragraphs of these T
                <span className="_ _1" />
                erms and Conditions{" "}
              </div>
              <div className="t m0 x2 h3 yc5 ff1 fs0 fc0 sc0 ls0 ws0">
                operates separately
                <span className="_ _4" />. If any court or relevant authority
                decides that any of them are{" "}
              </div>
              <div className="t m0 x2 h3 yc1 ff1 fs0 fc0 sc0 ls0 ws0">
                unlawful or unenforceable, the remaining sections and paragraphs
                will remain in full force{" "}
              </div>
              <div className="t m0 x2 h3 y6c ff1 fs0 fc0 sc0 ls0 ws0">
                and effect.
              </div>
              <div className="t m0 x2 h3 yc6 ff1 fs0 fc0 sc0 ls0 ws0">
                W<span className="_ _0" />
                aiver – If you breach these T<span className="_ _1" />
                erms and Conditions and we take no action, or if we delay in{" "}
              </div>
              <div className="t m0 x2 h3 yc7 ff1 fs0 fc0 sc0 ls0 ws0">
                taking action, that does not mean that we have waived our rights
                and we will still be{" "}
              </div>
              <div className="t m0 x2 h3 y6f ff1 fs0 fc0 sc0 ls0 ws0">
                entitled to use our rights and remedies. If we do waive a breach
                by you, we will only do so{" "}
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pfb" className="pf w0 h0" data-page-no="b">
          <div className="pc pcb w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                in writing (signed by one of our Directors), and that will not
                mean that we will automatically{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                waive any later breach by you.
              </div>
              <div className="t m0 x2 h3 y8a ff1 fs0 fc0 sc0 ls0 ws0">
                Entire agreement – These <span className="_ _0" />T
                <span className="_ _1" />
                erms and Conditions constitute the entire agreement between
                <span className="_ _3" />{" "}
              </div>
              <div className="t m0 x2 h3 y8b ff1 fs0 fc0 sc0 ls0 ws0">
                you and us and they supersede any and all earlier agreements
                between you and us.
              </div>
              <div className="t m0 x2 h3 yc8 ff1 fs0 fc0 sc0 ls0 ws0">
                Events outside of our control – We and the Partners will not be
                liable or responsible for{" "}
              </div>
              <div className="t m0 x2 h3 yc9 ff1 fs0 fc0 sc0 ls0 ws0">
                any failure to perform, or delay in performance of, any of our
                obligations to you if such{" "}
              </div>
              <div className="t m0 x2 h3 ya9 ff1 fs0 fc0 sc0 ls0 ws0">
                failure or delay is caused by an event outside of our control.
              </div>
              <div className="t m0 x2 h3 yca ff1 fs0 fc0 sc0 ls0 ws0">
                An event outside of our control means any act or event beyond
                our or the Partners{" "}
              </div>
              <div className="t m0 x2 h3 ycb ff1 fs0 fc0 sc0 ls0 ws0">
                reasonable control such as act(s) of God, wars, terrorist
                attacks, embargos, riots, strikes,{" "}
              </div>
              <div className="t m0 x2 h3 ycc ff1 fs0 fc0 sc0 ls0 ws0">
                lock-outs, trade disputes, ﬁres, ﬂoods, earthquakes or other
                natural disasters, break-down,{" "}
              </div>
              <div className="t m0 x2 h3 y8f ff1 fs0 fc0 sc0 ls0 ws0">
                inclement weather
                <span className="_ _0" />, interruption of transport, Government
                action or failure of public or{" "}
              </div>
              <div className="t m0 x2 h3 y90 ff1 fs0 fc0 sc0 ls0 ws0">
                private telecommunications or transport networks.
              </div>
              <div className="t m0 x2 h3 ycd ff1 fs0 fc0 sc0 ls0 ws0">
                If such an event takes place and it affects the performance of
                our or the Partners’
                <span className="_ _0" />{" "}
              </div>
              <div className="t m0 x2 h3 yce ff1 fs0 fc0 sc0 ls0 ws0">
                obligations to you: (i) we will contact you as soon as
                reasonably possible to notify you; and{" "}
              </div>
              <div className="t m0 x2 h3 y93 ff1 fs0 fc0 sc0 ls0 ws0">
                (ii) our and the Partners’
                <span className="_ _0" /> obligations to you will be suspended
                for the dura
                <span className="_ _3" />
                tion of the event.{" "}
              </div>
              <div className="t m0 x2 h3 y7a ff1 fs0 fc0 sc0 ls0 ws0">
                Where the event affects delivery of products to you, we will
                contact you to arrange a new{" "}
              </div>
              <div className="t m0 x2 h3 y7b ff1 fs0 fc0 sc0 ls0 ws0">
                delivery date after the event is over
                <span className="_ _0" />.
              </div>
              <div className="t m0 x2 h3 y96 ff1 fs0 fc0 sc0 ls0 ws0">
                Complaints – We operate a complaints handling procedure which we
                will use to try to{" "}
              </div>
              <div className="t m0 x2 h3 y97 ff1 fs0 fc0 sc0 ls0 ws0">
                resolve disputes when they ﬁrst arise, please let us know if you
                have any complaints or{" "}
              </div>
              <div className="t m0 x2 h3 y98 ff1 fs0 fc0 sc0 ls0 ws0">
                comments. Please see our Contact Us page for details of how to
                get in touch with us.
              </div>
              <div className="t m0 x2 h3 ycf ff1 fs0 fc0 sc0 ls0 ws0">
                19) Governing Law and Jurisdiction
              </div>
              <div className="t m0 x2 h3 yd0 ff1 fs0 fc0 sc0 ls0 ws0">
                Anything related to your order
                <span className="_ _0" />, use of the Websites or these{" "}
                <span className="_ _0" />T<span className="_ _1" />
                erms and Conditions are{" "}
              </div>
              <div className="t m0 x2 h3 yd1 ff1 fs0 fc0 sc0 ls0 ws0">
                governed by Italian law
                <span className="_ _0" />. The courts of Italy shall have the
                exclusive jurisdiction over any{" "}
              </div>
              <div className="t m0 x2 h3 yd2 ff1 fs0 fc0 sc0 ls0 ws0">
                dispute or claim relating to these T<span className="_ _1" />
                erms and Conditions.
              </div>
              <div className="t m0 x2 h3 yd3 ff1 fs0 fc0 sc0 ls0 ws0">
                20) T<span className="_ _1" />
                erms applicable to purchases from Selected Partners.
              </div>
              <div className="t m0 x2 h3 yd4 ff1 fs0 fc0 sc0 ls0 ws0">
                If you are purchasing an item from any of the Selected Partners
                listed at the end of this{" "}
              </div>
              <div className="t m0 x2 h3 yd5 ff1 fs0 fc0 sc0 ls0 ws0">
                section 20:
              </div>
              <div className="t m0 x2 h3 yd6 ff1 fs0 fc0 sc0 ls0 ws0">
                (a) Section 2 above shall not apply to you and shall be replaced
                by the following:
              </div>
              <div className="t m0 x2 h3 yd7 ff1 fs0 fc0 sc0 ls0 ws0">
                2) <span className="_ _0" />
                About us
              </div>
              <div className="t m0 x2 h3 y52 ff1 fs0 fc0 sc0 ls0 ws0">
                “We are BARN and we operate the Mobile <span className="_ _4" />
                Application and Website. W<span className="_ _2" />e provide the{" "}
              </div>
              <div className="t m0 x2 h3 y53 ff1 fs0 fc0 sc0 ls0 ws0">
                Services to you through the Mobile <span className="_ _0" />
                Application or Website. Further details of the Services{" "}
              </div>
              <div className="t m0 x2 h3 yd8 ff1 fs0 fc0 sc0 ls0 ws0">
                we provide are set out in section 3. When you purchase products
                from the Selected{" "}
              </div>
              <div className="t m0 x2 h3 yd9 ff1 fs0 fc0 sc0 ls0 ws0">
                Partners using the Mobile <span className="_ _0" />
                Application or Website, BARN will invoice you directly for the{" "}
              </div>
              <div className="t m0 x2 h3 yda ff1 fs0 fc0 sc0 ls0 ws0">
                product and associated delivery services. In such cases the
                provisions of <span className="_ _0" />
                Article 14(2)(c){" "}
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pfc" className="pf w0 h0" data-page-no="c">
          <div className="pc pcc w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                and <span className="_ _0" />
                Article 28 (as applicable) of the EU V<span className="_ _4" />A
                <span className="_ _4" />T Directive 2006/1
                <span className="_ _4" />
                12/EC will apply for EU V<span className="_ _4" />A
                <span className="_ _4" />T{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                purposes and section 47 (as applicable) of the IT V
                <span className="_ _1" />A<span className="_ _0" />T , will
                apply for IT
                <span className="_ _0" /> V<span className="_ _4" />A
                <span className="_ _0" />T purposes. <span className="_ _0" />
                This{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                does not change the underlying contract governing the supply of
                goods from the Selected{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                Partner to you and all your statutory rights are unaffected.
                Further details about the{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                products, the Selected Partners and the contract between you and
                the Selected Partners{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                in relation to your purchase of the products are set out in
                sections 5, 6 and 7 below
                <span className="_ _0" />
                .”
              </div>
              <div className="t m0 x2 h3 y57 ff1 fs0 fc0 sc0 ls0 ws0">
                (b) Section 6 above shall not apply to you and shall be replaced
                by the following:
              </div>
              <div className="t m0 x2 h3 y8d ff1 fs0 fc0 sc0 ls0 ws0">
                6) BARN
              </div>
              <div className="t m0 x2 h3 ycb ff1 fs0 fc0 sc0 ls0 ws0">
                As explained above, the contract for the purchase of the
                products is between you and the{" "}
              </div>
              <div className="t m0 x2 h3 ycc ff1 fs0 fc0 sc0 ls0 ws0">
                relevant Partner
                <span className="_ _0" />. When you purchase products using the
                Mobile <span className="_ _0" />
                Application or Website,{" "}
              </div>
              <div className="t m0 x2 h3 y8f ff1 fs0 fc0 sc0 ls0 ws0">
                we will receive payment from you and hold those funds on behalf
                of the relevant Partner
                <span className="_ _0" />,{" "}
              </div>
              <div className="t m0 x2 h3 y90 ff1 fs0 fc0 sc0 ls0 ws0">
                before transferring the relevant amount to the Partner once the
                products have been{" "}
              </div>
              <div className="t m0 x2 h3 y91 ff1 fs0 fc0 sc0 ls0 ws0">
                provided to you.
              </div>
              <div className="t m0 x2 h3 yce ff1 fs0 fc0 sc0 ls0 ws0">
                We request that all Partners using the Mobile{" "}
                <span className="_ _4" />
                Application or Website have and maintain{" "}
              </div>
              <div className="t m0 x2 h3 y93 ff1 fs0 fc0 sc0 ls0 ws0">
                reasonable business policies which comply with our own business
                policies. We cannot,{" "}
              </div>
              <div className="t m0 x2 h3 y7a ff1 fs0 fc0 sc0 ls0 ws0">
                however
                <span className="_ _0" />, be responsible for the Partners’
                <span className="_ _0" /> business policies. If you are unhappy
                with the{" "}
              </div>
              <div className="t m0 x2 h3 y7b ff1 fs0 fc0 sc0 ls0 ws0">
                product or service you have received from a Partner
                <span className="_ _0" />, you should contact us and we will{" "}
              </div>
              <div className="t m0 x2 h3 y7c ff1 fs0 fc0 sc0 ls0 ws0">
                liaise with the relevant Partner on your behalf to try and
                resolve the issue.
              </div>
              <div className="t m0 x2 h3 y97 ff1 fs0 fc0 sc0 ls0 ws0">
                (c) Paragraph 1 of section 7(b) above shall not apply to you and
                shall be replaced by the{" "}
              </div>
              <div className="t m0 x2 h3 y98 ff1 fs0 fc0 sc0 ls2 ws0">
                following:
              </div>
              <div className="t m0 x2 h3 ycf ff1 fs0 fc0 sc0 ls0 ws0">
                (b) Pricing and availability
                <span className="_ _4" />. Whilst we try and ensure that all
                details, descriptions and prices{" "}
              </div>
              <div className="t m0 x2 h3 ydb ff1 fs0 fc0 sc0 ls0 ws0">
                that appear on the Mobile <span className="_ _0" />
                Application or Website are accurate, as this information is{" "}
              </div>
              <div className="t m0 x2 h3 y9b ff1 fs0 fc0 sc0 ls0 ws0">
                provided to us by the Partners, there may be cases where errors
                occur
                <span className="_ _0" />. If we discover an{" "}
              </div>
              <div className="t m0 x2 h3 y9c ff1 fs0 fc0 sc0 ls0 ws0">
                error in the price of any products that you have ordered, we
                will inform you of this as soon{" "}
              </div>
              <div className="t m0 x2 h3 y9d ff1 fs0 fc0 sc0 ls0 ws0">
                as possible and give you the option of reconﬁrming your order at
                the correct price or{" "}
              </div>
              <div className="t m0 x2 h3 y9e ff1 fs0 fc0 sc0 ls0 ws0">
                cancelling it. If we are unable to contact you, your order will
                be treated as cancelled. If you{" "}
              </div>
              <div className="t m0 x2 h3 y9f ff1 fs0 fc0 sc0 ls0 ws0">
                cancel and you have already paid for the products, you will
                receive a full refund as soon as{" "}
              </div>
              <div className="t m0 x2 h3 ya0 ff1 fs0 fc0 sc0 ls0 ws0">
                possible.
              </div>
              <div className="t m0 x2 h3 ya1 ff1 fs0 fc0 sc0 ls0 ws0">
                (d) Paragraph 2 of section 7(b) above shall not apply to you and
                shall be replaced by the{" "}
              </div>
              <div className="t m0 x2 h3 ydc ff1 fs0 fc0 sc0 ls2 ws0">
                following:
              </div>
              <div className="t m0 x2 h3 ydd ff1 fs0 fc0 sc0 ls0 ws0">
                Delivery costs are not included in the prices and will be
                charged in addition. The delivery{" "}
              </div>
              <div className="t m0 x2 h3 yde ff1 fs0 fc0 sc0 ls0 ws0">
                costs (which will include V<span className="_ _4" />A
                <span className="_ _4" />T charged by us) will vary depending on
                the products that you{" "}
              </div>
              <div className="t m0 x2 h3 ydf ff1 fs0 fc0 sc0 ls0 ws0">
                have ordered and your delivery address. Please see the “Shipping
                Information” section of{" "}
              </div>
              <div className="t m0 x2 h3 yb2 ff1 fs0 fc0 sc0 ls0 ws0">
                our Orders and Shipping page for further details. The delivery
                costs applicable to your{" "}
              </div>
              <div className="t m0 x2 h3 yb3 ff1 fs0 fc0 sc0 ls0 ws0">
                order will be clearly displayed at checkout before you place
                your order (and are included in{" "}
              </div>
              <div className="t m0 x2 h3 yb4 ff1 fs0 fc0 sc0 ls0 ws0">
                the “T
                <span className="_ _1" />
                otal Cost” amount shown on the order summary page).
              </div>
              <div className="t m0 x2 h3 yb5 ff1 fs0 fc0 sc0 ls0 ws0">
                (e) Paragraph 1 of section 7(c) above shall not apply to you and
                shall be replaced by the{" "}
              </div>
              <div className="t m0 x2 h3 ye0 ff1 fs0 fc0 sc0 ls2 ws0">
                following:
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
        <div id="pfd" className="pf w0 h0" data-page-no="d">
          <div className="pc pcd w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAIAAACQxGAoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzXQREAAAjDMMC/580Hl0jor5tkAAAA+OskAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8JAAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwkAAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/CQAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg9o+3V0AjAIREHwTlKA/VeZAiTPJgQJzJSwfwsAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAwPhJAAAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAADA+EkAAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAACA8QMAAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAABg/AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAOMHAABg/AAAADB+AAAAGD8AAACMHwAAAMYPAAAA4wcAAIDxAwAAMH4AAAAYPwAAAIwfAAAAxg8AAADjBwAAgPEDAADA+AEAAGD8AAAAjB8AAADGDwAAAOMHAACA8QMAAMD4AQAAYPwAAAAwfgAAAMYPAAAA4wcAAIDxAwAAwPgBAABg/AAAADB+AAAAGD8AAADjBwAAgPEDAADA+AEAAGD8AAAAMH4AAAAYPwAAAIwfAAAAxg8AAMD4AQAAYPwAAAAwfgAAABg/AAAAjB8AAADGDwAAAPQP1KIAAAAnSURBVOMHAABg/AAAADB+AAAA/E1LAAAA3Dbm872rKkl1dyUR5aANPAcZI3xGdXAAAAAASUVORK5CYII="
            />
            <div className="c x1 y2a w2 h4">
              <div className="t m0 x2 h3 y2b ff1 fs0 fc0 sc0 ls0 ws0">
                (c) Payment: Please see the “Which payment methods do you
                accept?” section of our{" "}
              </div>
              <div className="t m0 x2 h3 y2c ff1 fs0 fc0 sc0 ls0 ws0">
                F<span className="_ _0" />
                AQs for details of our available payment methods. When you
                submit your order
                <span className="_ _0" />, we carry{" "}
              </div>
              <div className="t m0 x2 h3 y2d ff1 fs0 fc0 sc0 ls0 ws0">
                out a standard pre-authorisation check on your payment card and
                products will not be{" "}
              </div>
              <div className="t m0 x2 h3 y2e ff1 fs0 fc0 sc0 ls0 ws0">
                dispatched until the details you have provided are veriﬁed. For
                information on when your{" "}
              </div>
              <div className="t m0 x2 h3 y2f ff1 fs0 fc0 sc0 ls0 ws0">
                payment will be debited from your account please see the “When
                will my card be{" "}
              </div>
              <div className="t m0 x2 h3 y30 ff1 fs0 fc0 sc0 ls0 ws0">
                charged?” section in our F<span className="_ _0" />
                AQs
              </div>
              <div className="t m0 x2 h3 y57 ff1 fs0 fc0 sc0 ls0 ws0">
                (f) List of Selected Partners:
              </div>
            </div>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'
          />
        </div>
      </div>
      <div className="loading-indicator">
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
}

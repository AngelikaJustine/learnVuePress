
# SPI

## SPI SMU
SPI staff dan non staff ada beberapa perbedaan di :
- Struktur approval
- Upload data ijin
- Get data participant

Untuk staff, butuh dari/ke SAP untuk 3 point diatas. Untuk non staff butuh dari/ke database personalia masing-masing tergantung company.

Selain itu, ada perbedaan juga pada saat pengambilan settingan approver. Untuk staff akan diambil dari workflow rule & workflow approver buat mendapatkan max approver dan tingkatan approvernya. Untuk non staff, akan diambil dari table m request approval db erequest.

Perhatikan juga, di staff ada get setting maxapprover, untuk beberapa nik yang di setting di master setting.

Function create ada di BL_Transaction, insertSPI (staff), insertSPIMass (non staff). Function approve ada di BL_Transaction approveSPI & rejectSPI (staff), BL_Trans_Workflow processSingle (non staff).

## SPI PT & MK
Secara garis besar sama dengan SPI Non Staff SMU, mungkin hanya ada beberapa perbedaan saja di create / approval nya.


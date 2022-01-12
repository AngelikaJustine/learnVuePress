
# SPKL

## SPKL SMU
SPKL staff dan non staff ada beberapa perbedaan di :
- Struktur approval
- Upload data lembur
- Get data participant

Untuk staff, butuh dari/ke SAP untuk 3 point diatas. Untuk non staff butuh dari/ke database personalia masing-masing tergantung company.

Selain itu, ada perbedaan juga pada saat pengambilan settingan approver. Untuk staff akan diambil dari workflow rule & workflow approver buat mendapatkan max approver dan tingkatan approvernya. Untuk non staff, akan diambil dari table m request approval db erequest.

Perhatikan juga, di staff ada get setting Max_Approver, untuk beberapa nik yang di setting di master setting.

Function create ada di BL_Transaction, insertSPKL (staff & non staff). Function approve ada di BL_Transaction approveSPKL & rejectSPKL (staff), BL_Trans_Workflow processSingle (non staff).

## SPKL PT & MK
Secara garis besar sama dengan SPKL Non Staff SMU, mungkin hanya ada beberapa perbedaan saja di create / approval nya.

## Contoh Cuplikan Kode

```java
SELECT mat.material_id, mat.material_desc, COALESCE(uom.numerator, '1') 
FROM m_material AS mat  LEFT JOIN m_uom AS uom ON mat.material_id = uom.material_id  
WHERE ((mat.material_id LIKE '%azzura%')  OR (mat.material_desc LIKE '%azzura%')  
OR (mat.mat_grp2 LIKE '%azzura%')  OR (mat.old_material LIKE '%azzura%')) 
AND dist_chan = '02' AND mat_type = 'Z1FE'
```

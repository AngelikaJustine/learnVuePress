
# STPD

## STPD SMU
Cuma ada versi staff nya saja. Untuk approval ambil dari workflow rule & workflow approver. Ada 2 step approval, yaitu approval atasan, dan realisasi. Realisasi ini adalah step yang dilakukan ketika tanggal dokumen nya sudah lewat dari hari ini, dan digunakan untuk merealisasikan perjalanan dinasnya.

<!-- <img src="/image/image1.png" width="300" height="500"> -->
![An image](/images/CreateSTPD.png)

Setelah proses realisasi selesai, makan dokumen STPD ini bisa mencetak dokumen BPK, dimana BPK ini akan digunakan agar karyawan bisa mendapatkan uang dinas.

Dokumen realisasi ini akan langsung ter-generate ketika tanggal dinas di dokumen STPD sudah lampau pada saat approver terakhir approve, atau bisa juga di-generate dari job Upload Failed Data.

Untuk logic yang digunakan, sebagian besar ada di BL_STPD.

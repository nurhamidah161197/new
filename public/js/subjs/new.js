var table1 = $("#table-data").DataTable({
    // bLengthChange: false,
    // ordering: false,
    // processing: true,
    // serverSide: true,
    ajax: "/new/data",
    columns: [
      {
        data      : 'id',
        render : function (data, type, row, meta){
            return meta.row + meta.settings._iDisplayStart + 1;
          },
          className : "text-center",
          orderable : false,
          width : '5%'
    },
        {
            data      : 'nama'
        },
        {
            data      : 'nim'
        },
        // {
        //     data      : 'status',
        //     render    : function(data, type, row, meta){
        //         if(data === 0) return "<div class='btn-group'>" +
        //             "<label style='color:#ff0000'>"+
        //                 "Draft</label>"+
        //             "</div>";
        //         else if(data === 1) return "<div class='btn-group'>" +
        //             "<label style='color:#ff0000'>"+
        //                 "Diajukan ke Atasan</label>"+
        //             "</div>";
        //         else if(data === 2) return "<div class='btn-group'>" +
        //             "<label style='color:#ff0000'>"+
        //                 "Approve Atasan</label>"+
        //             "</div>";
        //         else return "<div class='btn-group'>" +
        //             "<label style='color:#0000ff'>"+
        //                 "Closed</label>"+
        //             "</div>";
        //     },
        // },
        {
            data      : 'id',
            render    : function(data){
                    return  "<div class='btn-group'>"+
                                "<button type='button' class='btn btn-sm hapusData' title='Hapus Data' value='" + data + "'>Hapus Data</button>"+
                            "</div>";
            },
            className : "text-center"
        },
        {
            data      : 'id',
            render    : function(data){
                    return  "<div class='btn-group'>"+
                                "<button type='button' class='btn btn-sm editData' title='Hapus Data' value='" + data + "'>Edit Data</button>"+
                            "</div>";
            },
            className : "text-center"
        }
    ]
});

$('#btnAdd').click(function(){
    // $('#modal_add').modal('show');
    window.location.href = '/new/index2';
});

$('#btnSave').click(function(){

    $.ajax({
        type : 'POST',
        url  : '/new/postdata',
        data : $('#form_add').serialize(),
        beforeSend: function() {
          Metronic.blockUI({
            boxed: true
          });
        },
        success :  function(response){
          $('#modal_add').modal('hide');
        //   Metronic.unblockUI();
          toastr["success"]("Data berhasil disimpan!.", "Notifikasi");
          table1.ajax.reload(null, false);
        },
        error: function(xhr){
        //   Metronic.unblockUI();
        //    if(xhr.status == 402){
        //        toastr["error"](xhr.responseJSON.message, "Notifikasi");
        //    }else{
               toastr["error"]("Masih Terdapat Error!", "Notifikasi");
        //    }
        }
    })
 })
 
 $('#table-data').on('click', 'tbody tr .hapusData', function(e){
    $.ajax({
        type : 'GET',
        url  : '/new/hapus/' + this.value,
        beforeSend: function() {
          Metronic.blockUI({
            boxed: true
          });
        },
        success :  function(response){
          toastr["success"]("Data berhasil dihapus!.", "Notifikasi");
          table1.ajax.reload(null, false);
        },
        error: function(xhr){
        //   Metronic.unblockUI();
        //    if(xhr.status == 402){
        //        toastr["error"](xhr.responseJSON.message, "Notifikasi");
        //    }else{
               toastr["error"]("Masih Terdapat Error!", "Notifikasi");
        //    }
        }
    })
 });

 $('#table-data').on('click', 'tbody tr .editData', function(e){
    $.ajax({
        type : 'GET',
        url  : '/new/edit/' + this.value,
        // beforeSend: function() {
        //   Metronic.blockUI({
        //     boxed: true
        //   });
        // },
        success :  function(response){
            $('#nama').val(response.data.nama);
            $('#id').val(response.data.id);
            $('#nimsaya').val(response.data.nim);
            $('#modal_add').modal('show');
        },
        error: function(xhr){
        //   Metronic.unblockUI();
        //    if(xhr.status == 402){
        //        toastr["error"](xhr.responseJSON.message, "Notifikasi");
        //    }else{
               toastr["error"]("Masih Terdapat Error!", "Notifikasi");
        //    }
        }
    })
 });
@extends('metronic')

@section('content')
<div class="page-content-wrapper">
  <div class="page-content">
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">Home 2</h3>
    <div class="page-bar">
      <ul class="page-breadcrumb">
        <li>
          <i class="fa fa-home"></i>
          <a href="{{ url('home') }}">Home</a>
        </li>
      </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
      <div class="col-md-12">
        <div class="portlet light bordered">
          <div class="portlet-body">
            <button class='btn green-seagreen pull-right' style='width:120px;padding-bottom:13px' id="btnAdd">Add Data&nbsp;&nbsp;&nbsp;&nbsp;<i class="m-icon-swapright m-icon-black"></i></button>
            <table class="table table-bordered table-hover" id="table-data">
              <thead>
                  <tr>
                      <th>No.</th>
                      <th>Nama</th>
                      <th>Nim</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
          </table>

<!-- MODAL ADD USER -->
<div class="modal fade" id="modal_add" aria-hidden="true">
	<div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
        <h4 class="modal-title">Add Data</h4>
      </div>
      <!-- BEGIN FORM-->
      <form class="form-horizontal" id="form_add" autocomplete="off" onSubmit="return false">
        <div class="modal-body">
          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                <label class="control-label col-md-4">Nama</label>
                <div class="col-md-8">
                  <div class="input-group input-large">
                    <input name="nama" id="nama" type="text" class="form-control" width="100%">
                    <input name="id" id="id" type="hidden" class="form-control" width="100%">
                    @csrf
                  </div>
                </div>
              </div>
            </div>
            <!--/span-->
            <div class="col-md-8">
              <div class="form-group">
                <label class="control-label col-md-4">Nim</label>
                <div class="col-md-8">
                  <div class="input-group input-large">
                    <input name="nimsaya" id="nimsaya" type="text" class="form-control" width="100%">
                    @csrf
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{-- <div class="col-md-8">
            <div class="form-group">
              <label class="control-label col-md-4">Nim</label>
              <div class="col-md-8">
                <div class="input-group input-large">
                  <input name="nim" id="nim" type="text" class="form-control" width="100%">
                  @csrf
                </div>
              </div>
            </div>
          </div> --}}
          <!--/span-->
        </div>
          <!--/row-->
        <div class="modal-footer">
          <div class="row">
            <div class="col-md-offset-8 col-md-4">
              <button type="submit" id="btnSave" class="btn green-seagreen button-submit">Submit</button>
              <button type="button" class="btn default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>

      </form>
      <!-- END FORM-->
    </div>
	</div>
	<!-- /.modal-dialog -->
</div>
</div>
<!-- END ADD USER -->
         </div>
       </div>
      </div>
    </div>
    <!-- END PAGE CONTENT-->
  </div>
</div>

@endsection
@push('scripts')
<script src="{{ URL::asset('js/subjs/new.js') }}?modified={{ filemtime(public_path('js/subjs/new.js'))  }}" type="text/javascript"></script>
@endpush

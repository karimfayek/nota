@extends('admin.app')
@section('title') {{ $pageTitle }} @endsection
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> {{ $pageTitle }} - {{ $subTitle }}</h1>
        </div>
    </div>
    @include('admin.partials.flash')
    <div class="row user">
        <div class="col-md-12">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <form action="{{ route('admin.colors.update') }}" method="POST" role="form" enctype="multipart/form-data">>
                            @csrf
							  <input type="hidden" name="product_id" value="{{ $product->id }}">
                            <h3 class="tile-title">Color Information</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group row">
								 <div class="col-6">
									  <label class="control-label" for="name">Name</label>
										<input 
											class="form-control @error('name') is-invalid @enderror"
											type="text"
											placeholder="Enter name"
											id="name"
											name="name"
											value="{{ old('name', $product->name) }}"
											
										/>
									  
										<div class="invalid-feedback active">
											<i class="fa fa-exclamation-circle fa-fw"></i> @error('name') <span>{{ $message }}</span> @enderror
										</div>
								  </div>
								  <div class="col-6">
								    <label class="control-label" for="hex_code ">Hex Code</label>
                                    <input
                                        class="form-control @error('hex_code ') is-invalid @enderror"
                                        type="color"
                                        
                                        name="hex_code"
                                        value="{{ old('hex_code ', $product->hex_code ) }}"
										style="
												width: 45px;
												height: 41px;
												padding: 0;
											"
                                    />
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('hex_code ') <span>{{ $message }}</span> @enderror
                                    </div>
								  </div>
                                   
                                </div>
								
								 
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Product</button>
                                        <a class="btn btn-danger" href="{{ route('admin.colors.index') }}"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</a>
                                    </div>
                                </div>
                            </div>
                        </form>
						
                    </div>
                </div>
              
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script type="text/javascript" src="{{ asset('backend/js/plugins/select2.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('backend/js/plugins/dropzone/dist/min/dropzone.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('backend/js/plugins/bootstrap-notify.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('backend/js/app.js') }}"></script>
    <script>
        Dropzone.autoDiscover = false;

        $( document ).ready(function() {
            $('#categories').select2();

            let myDropzone = new Dropzone("#dropzone", {
                paramName: "image",
                addRemoveLinks: false,
                maxFilesize: 4,
                parallelUploads: 2,
                uploadMultiple: false,
                url: "{{ route('admin.products.images.upload') }}",
                autoProcessQueue: false,
            });
            myDropzone.on("queuecomplete", function (file) {
                window.location.reload();
                showNotification('Completed', 'All product images uploaded', 'success', 'fa-check');
            });
            $('#uploadButton').click(function(){
                if (myDropzone.files.length === 0) {
                    showNotification('Error', 'Please select files to upload.', 'danger', 'fa-close');
                } else {
                    myDropzone.processQueue();
                }
            });
            function showNotification(title, message, type, icon)
            {
                $.notify({
                    title: title + ' : ',
                    message: message,
                    icon: 'fa ' + icon
                },{
                    type: type,
                    allow_dismiss: true,
                    placement: {
                        from: "top",
                        align: "right"
                    },
                });
            }
        });
    </script>
@endpush

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
                        <form action="{{ route('admin.blogs.update') }}" method="POST" role="form" enctype="multipart/form-data">>
                            @csrf
                            <h3 class="tile-title">Blog Information</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="title">title</label>
                                    <input
                                        class="form-control @error('title') is-invalid @enderror"
                                        type="text"
                                        placeholder="Enter title"
                                        id="title"
                                        name="title"
                                        value="{{ old('title', $product->title) }}"
                                    />
                                    <input type="hidden" name="product_id" value="{{ $product->id }}">
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('title') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								<div class="form-group">
                                    <label class="control-label" for="content">Content </label>
                                    <textarea
                                        class="form-control @error('content') is-invalid @enderror"
                                       
                                        id="content"
                                        name="content"
                                    />{{ old('content' ,  $product->content) }} </textarea>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('content') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								 <div class="form-group">
                                    <label class="control-label" for="seo_kw">Key Wors</label>
                                    <textarea
                                        class="notiny  form-control @error('seo_kw') is-invalid @enderror"
                                       
                                        id="seo_kw"
                                        name="seo_kw"
                                    />{{ old('seo_kw' ,  $product->seo_kw) }} </textarea>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('seo_kw') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								
                               
								
                            </div>
								<div class="tile">
									<h3 class="tile-title">Upload Image</h3>
									<hr>
									<div class="tile-body">
										<div class="row">
										 <div class="col-md-2">
                                    @if ($product->image != null)
                                        <figure class="mt-2" style="width: 80px; height: auto;">
                                            <img src="{{ asset('storage/blogs/'.$product->image) }}" id="banner_image" class="img-fluid" alt="img">
                                        </figure>
                                    @endif
                                </div>
											<div class="col-md-10">
											   <input class="form-control " type="file" id="image" name="image">
											</div>
										</div>
									</div>
								</div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update </button>
                                        <a class="btn btn-danger" href="{{ route('admin.blogs.index') }}"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</a>
                                    </div>
                                </div>
                            </div>
                        </form>
						 @if ($product->full)
                                <hr>
                                <div class="row">
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/banners/'.$product->full) }}" id="brandLogo" class="img-fluid" alt="img">
                                                   
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            @endif
                    </div>
                </div>
                <div class="tab-pane" id="images">
                    <div class="tile">
                        <h3 class="tile-title">Upload Image</h3>
                        <hr>
                        <div class="tile-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <form action="" class="dropzone" id="dropzone" style="border: 2px dashed rgba(0,0,0,0.3)">
                                        <input type="hidden" name="product_id" value="{{ $product->id }}">
                                        {{ csrf_field() }}
                                    </form>
                                </div>
                            </div>
                            <div class="row d-print-none mt-2">
                                <div class="col-12 text-right">
                                    <button class="btn btn-success" type="button" id="uploadButton">
                                        <i class="fa fa-fw fa-lg fa-upload"></i>Upload Images
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="attributes">
                    <product-attributes :productid="{{ $product->id }}"></product-attributes>
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

@extends('admin.app')
@section('title')
    {{ $pageTitle }}
@endsection
@section('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/js/plugins/dropzone/dist/min/dropzone.min.css') }}" />
@endsection
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> {{ $pageTitle }} - {{ $subTitle }}</h1>
        </div>
    </div>
    @include('admin.partials.flash')
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#images" data-toggle="tab">Images</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <form action="{{ route('admin.products.update') }}" method="POST" role="form">
                            @csrf
                            <h3 class="tile-title">Product Information</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="name">اسم المنتج</label>
                                    <input class="form-control @error('name') is-invalid @enderror" type="text"
                                        placeholder="Enter product name" id="name" name="name"
                                        value="{{ old('name', $product->name) }}" />
                                    <input type="hidden" name="product_id" value="{{ $product->id }}">
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('name')
                                            <span>{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label" for="categories">القسم الخاص بة</label>
                                            <select name="categories[]" id="categories" class="form-control" multiple>
                                                @foreach ($categories as $category)
                                                    @php $check = in_array($category->id, $product->categories->pluck('id')->toArray()) ? 'selected' : ''@endphp
                                                    <option value="{{ $category->id }}" {{ $check }}>
                                                        {{ $category->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label" for="price">السعر للمكتبة</label>
                                            <input class="form-control @error('price') is-invalid @enderror" type="text"
                                                placeholder="Enter product price" id="price" name="price"
                                                value="{{ old('price', $product->price) }}" />
                                            <div class="invalid-feedback active">
                                                <i class="fa fa-exclamation-circle fa-fw"></i> @error('price')
                                                    <span>{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label" for="price2"> السعر للشركة</label>
                                            <input class="form-control" type="text"
                                                placeholder="Enter product price 2" id="price2"
                                                name="price2"
                                                value="{{ old('price2', $product->price2) }}" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label" for="quantity">الكمية الموجودة المخزن</label>
                                            <input class="form-control @error('quantity') is-invalid @enderror"
                                                type="number" placeholder="Enter product quantity" id="quantity"
                                                name="quantity" value="{{ old('quantity', $product->quantity) }}" />
                                            <div class="invalid-feedback active">
                                                <i class="fa fa-exclamation-circle fa-fw"></i> @error('quantity')
                                                    <span>{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label" for="weight">الوزن</label>
                                            <input class="form-control" type="text" placeholder="Enter product weight"
                                                id="weight" name="weight"
                                                value="{{ old('weight', $product->weight) }}" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label" for="min_req">اقل كمية للطلب</label>
                                            <input class="form-control @error('min_req') is-invalid @enderror"
                                                type="number" placeholder="Enter product min_req" id="min_req"
                                                name="min_req" value="{{ old('min_req', $product->min_req) }}" required />
                                            <div class="invalid-feedback active">
                                                <i class="fa fa-exclamation-circle fa-fw"></i> @error('min_req')
                                                    <span>{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label" for="max_req">اقصى كمية للطلب</label>
                                            <input class="form-control @error('max_req') is-invalid @enderror"
                                                type="number" placeholder="Enter product max_req" id="max_req"
                                                name="max_req" value="{{ old('max_req', $product->max_req) }}" required />
                                            <div class="invalid-feedback active">
                                                <i class="fa fa-exclamation-circle fa-fw"></i> @error('max_req')
                                                    <span>{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="short_des">وصف قصير</label>
                                    <textarea name="short_des" id="short_des" rows="8" class="notiny form-control">{{ old('short_des', $product->short_des) }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="description">وصف طويل</label>
                                    <textarea name="description" id="description" rows="8" class="form-control">{{ old('description', $product->description) }}</textarea>
                                </div>

                                <div class="form-group">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" id="status"
                                                name="status" {{ $product->status == 1 ? 'checked' : '' }} />نشط (يظهر على الموقع)
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label for="colors" class="block text-sm font-medium text-gray-700">Colors</label>
                                    <div id="color-list">
                                        @foreach ($colors as $color)
                                        <div class="flex items-center mb-2">
                                            <input type="checkbox" name="colors[{{ $color->id }}][selected]" value="1" class="mr-2">
                                            <span class="mr-4">{{ $color->name }}</span>
                                            <input type="number" name="colors[{{ $color->id }}][quantity]" placeholder="Quantity" class="border p-2">
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i
                                                class="fa fa-fw fa-lg fa-check-circle"></i>تحديث</button>
                                        <a class="btn btn-danger" href="{{ route('admin.products.index') }}"><i
                                                class="fa fa-fw fa-lg fa-arrow-left"></i>رجوع</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane" id="images">
                    <div class="tile">
                        <h3 class="tile-title">Upload Image</h3>
                        <hr>
                        <div class="tile-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <form action="" class="dropzone" id="dropzone"
                                        style="border: 2px dashed rgba(0,0,0,0.3)">
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
                            @if ($product->images)
                                <hr>
                                <div class="row">
                                    @foreach ($product->images as $image)
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/products/mobile_photos/' . $image->full) }}"
                                                        id="brandLogo" class="img-fluid" alt="img">
                                                    <a class="card-link float-right text-danger"
                                                        href="{{ route('admin.products.images.delete', $image->id) }}">
                                                        <i class="fa fa-fw fa-lg fa-trash"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            @endif
                        </div>
                    </div>
                </div>




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
   
    
    
    <script>
        Dropzone.autoDiscover = false;

        $(document).ready(function() {
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
            myDropzone.on("queuecomplete", function(file) {
                window.location.reload();
                showNotification('Completed', 'All product images uploaded', 'success', 'fa-check');
            });
            $('#uploadButton').click(function() {
                if (myDropzone.files.length === 0) {
                    showNotification('Error', 'Please select files to upload.', 'danger', 'fa-close');
                } else {
                    myDropzone.processQueue();
                }
            });

            function showNotification(title, message, type, icon) {
                $.notify({
                    title: title + ' : ',
                    message: message,
                    icon: 'fa ' + icon
                }, {
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

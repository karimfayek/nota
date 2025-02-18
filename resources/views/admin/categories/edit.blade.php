@extends('admin.app')
@section('title') {{ $pageTitle }} @endsection
<meta name="csrf-token" content="{{ csrf_token() }}">
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> {{ $pageTitle }}</h1>
        </div>
    </div>
    @include('admin.partials.flash')
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">القسم</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products" data-toggle="tab">منتجات القسم</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            
            <div class="tab-content">
                <div class="tab-pane active" id="general">
            <div class="tile">
                <h3 class="tile-title">{{ $subTitle }}</h3>
                <form action="{{ route('admin.categories.update') }}" method="POST" role="form" enctype="multipart/form-data">
                    @csrf
                    <div class="tile-body">
                        <div class="form-group">
                            <label class="control-label" for="name">الاسم <span class="m-l-5 text-danger"> *</span></label>
                            <input class="form-control @error('name') is-invalid @enderror" type="text" name="name" id="name" value="{{ old('name', $targetCategory->name) }}"/>
                            <input type="hidden" name="id" value="{{ $targetCategory->id }}">
                            @error('name') {{ $message }} @enderror
                        </div>
                       
                        <div class="form-group">
                            <label class="control-label" for="description">Description</label>
                            <textarea class="notiny form-control" rows="4" name="description" id="description">{{ old('description', $targetCategory->description) }}</textarea>
                        </div>
                       
                        <div class="form-group">
                            <label for="parent">القسم الأب<span class="m-l-5 text-danger"> *</span></label>
                            <select id=parent class="form-control custom-select mt-15 @error('parent_id') is-invalid @enderror" name="parent_id">
                                <option value="0">Select a parent category</option>
                                @foreach($categories as $key => $category)
                                    @if ($targetCategory->parent_id == $key)
                                        <option value="{{ $key }}" selected> {{ $category }} </option>
                                    @else
                                        <option value="{{ $key }}"> {{ $category }} </option>
                                    @endif
                                @endforeach
                            </select>
                            @error('parent_id') {{ $message }} @enderror
                        </div>
                      
                        <div class="form-group">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="menu" name="menu"
                                    {{ $targetCategory->menu == 1 ? 'checked' : '' }}
                                    />نشيط
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-2">
                                    @if ($targetCategory->image != null)
                                        <figure class="mt-2" style="width: 80px; height: auto;">
                                            <img src="{{ asset('storage/'.$targetCategory->image) }}" id="categoryImage" class="img-fluid" alt="img">
                                        </figure>
                                    @endif
                                </div>
                                <div class="col-md-10">
                                    <label class="control-label">صورة مربعة</label>
                                    <input class="form-control @error('image') is-invalid @enderror" type="file" id="image" name="image"/>
                                    @error('image') {{ $message }} @enderror
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-2">
                                    @if ($targetCategory->banner_image != null)
                                        <figure class="mt-2" style="width: 80px; height: auto;">
                                            <img src="{{ asset('storage/'.$targetCategory->banner_image) }}" id="banner_image" class="img-fluid" alt="img">
                                        </figure>
                                    @endif
                                </div>
                                <div class="col-md-10">
                                    <label class="control-label">صورة عريضة</label>
                                    <input class="form-control @error('banner_image') is-invalid @enderror" type="file" id="banner_image" name="banner_image"/>
                                    @error('banner_image') {{ $message }} @enderror
                                </div>
                            </div>
                        </div>
						
                        <div class="form-group">
                            <label class="control-label" for="order_no">ترتيب القسم</label>
                            <input type="number" class="form-control"  name="order_no" id="order_no" value="{{ old('order_no', $targetCategory->order_no) }}">
                        </div>
                    </div>
                    <div class="tile-footer">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>تحديث</button>
                        &nbsp;&nbsp;&nbsp;
                        <a class="btn btn-secondary" href="{{ route('admin.categories.index') }}"><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
        <div class="row tab-pane" id="products">
            <div class="col-md-12">
                <div class="tile">
                    <h3 class="tile-title">{{ $targetCategory->name }} - Products</h3>
                    <div class="tile-body">
                        <table class="table table-hover table-bordered" id="sampleTable">
                            <thead>
                            <tr>
                                <th> # </th>
                                <th> Name </th>
                                <th class="text-center"> Status </th>
                                <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach($targetCategory->products as $product)
                                    <tr>
                                        <td>{{ $product->id }}</td>
                                        <td>{{ $product->name }}</td>
                                       
                                        <td class="text-center">
                                            @if ($product->status == 1)
                                                <span class="badge badge-success">Active</span>
                                            @else
                                                <span class="badge badge-danger">Not Active</span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group" role="group" aria-label="Second group">
                                                <a href="{{ route('admin.products.edit', $product->id) }}" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></a>
                                                <a href="{{ route('admin.products.delete', $product->id) }}" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
@endsection
@push('scripts')

@endpush

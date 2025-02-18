@extends('admin.app')
@section('title' , 'General Get quote')
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> General Get quote</h1>
            <p>General Get quote</p>
        </div>
       
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <table class="table table-hover table-bordered table-responsive" id="sampleTable">
                        <thead>
                        <tr>
                                                <th> Name </th>
                            <th class="text-center"> Email  </th>
                            <th class="text-center">  Phone </th>
                            <th class="text-center"> Comapny  </th>
                            <th class="text-center">  Requested Product </th>
                            <th class="text-center">  Product details</th>
                            <th class="text-center">  Country</th>
                            <th class="text-center">  Client port</th>
                            <th class="text-center">  Shipping Terms</th>
                            <th class="text-center">  Notes </th>
                            <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($catalogs as $product)
                            <tr>
                                <td> {{ $product->name }}</td>
                                <td> {{ $product->email }}</td>
                                <td> {{ $product->phone }}</td>
                                <td> {{ $product->company }}</td>
                                <td> {{ $product->product->name }}</td> 
                                <td> {{ $product->productspecs }}</td> 
                                <td> {{ $product->messagecountry->name }}</td> 
                                <td> {{ $product->clientport }}</td> 
                                <td> {{ $product->shippingterms }}</td> 
                                <td> {{ $product->notes }}</td> 
                                <td class="text-center">
                                        <div class="btn-group" role="group" aria-label="Second group">
                                           
                                            <a href="{{ route('admin.messages.delete', $product->id) }}" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></a>
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
@endsection
@push('scripts')
<style>
i.false-icon {
    color: #d22d2d;
    font-size: 20px;
}
i.true-icon {
    color: #007fcc;
    font-size: 20px;
}
</style>
    <script type="text/javascript" src="{{ asset('backend/js/plugins/jquery.dataTables.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('backend/js/plugins/dataTables.bootstrap.min.js') }}"></script>
     <script type="text/javascript">$('#sampleTable').DataTable({
        order: [[0, 'desc']]
    });;</script>

@endpush

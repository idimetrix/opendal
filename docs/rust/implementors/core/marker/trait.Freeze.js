(function() {var implementors = {
"opendal":[["impl Freeze for <a class=\"enum\" href=\"opendal/enum.EntryMode.html\" title=\"enum opendal::EntryMode\">EntryMode</a>",1,["opendal::types::mode::EntryMode"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Entry.html\" title=\"struct opendal::Entry\">Entry</a>",1,["opendal::types::entry::Entry"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Metadata.html\" title=\"struct opendal::Metadata\">Metadata</a>",1,["opendal::types::metadata::Metadata"]],["impl Freeze for <a class=\"enum\" href=\"opendal/enum.Metakey.html\" title=\"enum opendal::Metakey\">Metakey</a>",1,["opendal::types::metadata::Metakey"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Reader.html\" title=\"struct opendal::Reader\">Reader</a>",1,["opendal::types::reader::Reader"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.BlockingReader.html\" title=\"struct opendal::BlockingReader\">BlockingReader</a>",1,["opendal::types::reader::BlockingReader"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Writer.html\" title=\"struct opendal::Writer\">Writer</a>",1,["opendal::types::writer::Writer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.BlockingWriter.html\" title=\"struct opendal::BlockingWriter\">BlockingWriter</a>",1,["opendal::types::writer::BlockingWriter"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Lister.html\" title=\"struct opendal::Lister\">Lister</a>",1,["opendal::types::list::Lister"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.BlockingLister.html\" title=\"struct opendal::BlockingLister\">BlockingLister</a>",1,["opendal::types::list::BlockingLister"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Operator.html\" title=\"struct opendal::Operator\">Operator</a>",1,["opendal::types::operator::operator::Operator"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.BlockingOperator.html\" title=\"struct opendal::BlockingOperator\">BlockingOperator</a>",1,["opendal::types::operator::blocking_operator::BlockingOperator"]],["impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"opendal/struct.OperatorBuilder.html\" title=\"struct opendal::OperatorBuilder\">OperatorBuilder</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A: Freeze,</span>",1,["opendal::types::operator::builder::OperatorBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.OperatorInfo.html\" title=\"struct opendal::OperatorInfo\">OperatorInfo</a>",1,["opendal::types::operator::metadata::OperatorInfo"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionWrite.html\" title=\"struct opendal::operator_functions::FunctionWrite\">FunctionWrite</a>",1,["opendal::types::operator::operator_functions::FunctionWrite"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionDelete.html\" title=\"struct opendal::operator_functions::FunctionDelete\">FunctionDelete</a>",1,["opendal::types::operator::operator_functions::FunctionDelete"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionList.html\" title=\"struct opendal::operator_functions::FunctionList\">FunctionList</a>",1,["opendal::types::operator::operator_functions::FunctionList"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionLister.html\" title=\"struct opendal::operator_functions::FunctionLister\">FunctionLister</a>",1,["opendal::types::operator::operator_functions::FunctionLister"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionRead.html\" title=\"struct opendal::operator_functions::FunctionRead\">FunctionRead</a>",1,["opendal::types::operator::operator_functions::FunctionRead"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionReader.html\" title=\"struct opendal::operator_functions::FunctionReader\">FunctionReader</a>",1,["opendal::types::operator::operator_functions::FunctionReader"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_functions/struct.FunctionStat.html\" title=\"struct opendal::operator_functions::FunctionStat\">FunctionStat</a>",1,["opendal::types::operator::operator_functions::FunctionStat"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureStat.html\" title=\"struct opendal::operator_futures::FutureStat\">FutureStat</a>",1,["opendal::types::operator::operator_futures::FutureStat"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FuturePresignRead.html\" title=\"struct opendal::operator_futures::FuturePresignRead\">FuturePresignRead</a>",1,["opendal::types::operator::operator_futures::FuturePresignRead"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FuturePresignWrite.html\" title=\"struct opendal::operator_futures::FuturePresignWrite\">FuturePresignWrite</a>",1,["opendal::types::operator::operator_futures::FuturePresignWrite"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureRead.html\" title=\"struct opendal::operator_futures::FutureRead\">FutureRead</a>",1,["opendal::types::operator::operator_futures::FutureRead"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureReader.html\" title=\"struct opendal::operator_futures::FutureReader\">FutureReader</a>",1,["opendal::types::operator::operator_futures::FutureReader"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureWrite.html\" title=\"struct opendal::operator_futures::FutureWrite\">FutureWrite</a>",1,["opendal::types::operator::operator_futures::FutureWrite"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureWriter.html\" title=\"struct opendal::operator_futures::FutureWriter\">FutureWriter</a>",1,["opendal::types::operator::operator_futures::FutureWriter"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureDelete.html\" title=\"struct opendal::operator_futures::FutureDelete\">FutureDelete</a>",1,["opendal::types::operator::operator_futures::FutureDelete"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureList.html\" title=\"struct opendal::operator_futures::FutureList\">FutureList</a>",1,["opendal::types::operator::operator_futures::FutureList"]],["impl Freeze for <a class=\"struct\" href=\"opendal/operator_futures/struct.FutureLister.html\" title=\"struct opendal::operator_futures::FutureLister\">FutureLister</a>",1,["opendal::types::operator::operator_futures::FutureLister"]],["impl Freeze for <a class=\"enum\" href=\"opendal/enum.ErrorKind.html\" title=\"enum opendal::ErrorKind\">ErrorKind</a>",1,["opendal::types::error::ErrorKind"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/struct.Error.html\" title=\"struct opendal::Error\">Error</a>",1,["opendal::types::error::Error"]],["impl Freeze for <a class=\"enum\" href=\"opendal/enum.Scheme.html\" title=\"enum opendal::Scheme\">Scheme</a>",1,["opendal::types::scheme::Scheme"]],["impl Freeze for <a class=\"struct\" href=\"opendal/struct.Capability.html\" title=\"struct opendal::Capability\">Capability</a>",1,["opendal::types::capability::Capability"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.ConcurrentLimitLayer.html\" title=\"struct opendal::layers::ConcurrentLimitLayer\">ConcurrentLimitLayer</a>",1,["opendal::layers::concurrent_limit::ConcurrentLimitLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.ImmutableIndexLayer.html\" title=\"struct opendal::layers::ImmutableIndexLayer\">ImmutableIndexLayer</a>",1,["opendal::layers::immutable_index::ImmutableIndexLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.LoggingLayer.html\" title=\"struct opendal::layers::LoggingLayer\">LoggingLayer</a>",1,["opendal::layers::logging::LoggingLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.TimeoutLayer.html\" title=\"struct opendal::layers::TimeoutLayer\">TimeoutLayer</a>",1,["opendal::layers::timeout::TimeoutLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.BlockingLayer.html\" title=\"struct opendal::layers::BlockingLayer\">BlockingLayer</a>",1,["opendal::layers::blocking::BlockingLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.ChaosLayer.html\" title=\"struct opendal::layers::ChaosLayer\">ChaosLayer</a>",1,["opendal::layers::chaos::ChaosLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.MetricsLayer.html\" title=\"struct opendal::layers::MetricsLayer\">MetricsLayer</a>",1,["opendal::layers::metrics::MetricsLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.PrometheusLayer.html\" title=\"struct opendal::layers::PrometheusLayer\">PrometheusLayer</a>",1,["opendal::layers::prometheus::PrometheusLayer"]],["impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"opendal/layers/struct.RetryLayer.html\" title=\"struct opendal::layers::RetryLayer\">RetryLayer</a>&lt;I&gt;",1,["opendal::layers::retry::RetryLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.TracingLayer.html\" title=\"struct opendal::layers::TracingLayer\">TracingLayer</a>",1,["opendal::layers::tracing::TracingLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.MinitraceLayer.html\" title=\"struct opendal::layers::MinitraceLayer\">MinitraceLayer</a>",1,["opendal::layers::minitrace::MinitraceLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.MadsimLayer.html\" title=\"struct opendal::layers::MadsimLayer\">MadsimLayer</a>",1,["opendal::layers::madsim::MadsimLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.MadsimServer.html\" title=\"struct opendal::layers::MadsimServer\">MadsimServer</a>",1,["opendal::layers::madsim::MadsimServer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.OtelTraceLayer.html\" title=\"struct opendal::layers::OtelTraceLayer\">OtelTraceLayer</a>",1,["opendal::layers::oteltrace::OtelTraceLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.ThrottleLayer.html\" title=\"struct opendal::layers::ThrottleLayer\">ThrottleLayer</a>",1,["opendal::layers::throttle::ThrottleLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.AwaitTreeLayer.html\" title=\"struct opendal::layers::AwaitTreeLayer\">AwaitTreeLayer</a>",1,["opendal::layers::await_tree::AwaitTreeLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/layers/struct.AsyncBacktraceLayer.html\" title=\"struct opendal::layers::AsyncBacktraceLayer\">AsyncBacktraceLayer</a>",1,["opendal::layers::async_backtrace::AsyncBacktraceLayer"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.AccessorInfo.html\" title=\"struct opendal::raw::AccessorInfo\">AccessorInfo</a>",1,["opendal::raw::accessor::AccessorInfo"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/enum.Operation.html\" title=\"enum opendal::raw::Operation\">Operation</a>",1,["opendal::raw::operation::Operation"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpCreateDir.html\" title=\"struct opendal::raw::RpCreateDir\">RpCreateDir</a>",1,["opendal::raw::rps::RpCreateDir"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpDelete.html\" title=\"struct opendal::raw::RpDelete\">RpDelete</a>",1,["opendal::raw::rps::RpDelete"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpList.html\" title=\"struct opendal::raw::RpList\">RpList</a>",1,["opendal::raw::rps::RpList"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpPresign.html\" title=\"struct opendal::raw::RpPresign\">RpPresign</a>",1,["opendal::raw::rps::RpPresign"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/struct.PresignedRequest.html\" title=\"struct opendal::raw::PresignedRequest\">PresignedRequest</a>",1,["opendal::raw::rps::PresignedRequest"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpRead.html\" title=\"struct opendal::raw::RpRead\">RpRead</a>",1,["opendal::raw::rps::RpRead"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpBatch.html\" title=\"struct opendal::raw::RpBatch\">RpBatch</a>",1,["opendal::raw::rps::RpBatch"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/enum.BatchedReply.html\" title=\"enum opendal::raw::BatchedReply\">BatchedReply</a>",1,["opendal::raw::rps::BatchedReply"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpStat.html\" title=\"struct opendal::raw::RpStat\">RpStat</a>",1,["opendal::raw::rps::RpStat"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpWrite.html\" title=\"struct opendal::raw::RpWrite\">RpWrite</a>",1,["opendal::raw::rps::RpWrite"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpCopy.html\" title=\"struct opendal::raw::RpCopy\">RpCopy</a>",1,["opendal::raw::rps::RpCopy"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.RpRename.html\" title=\"struct opendal::raw::RpRename\">RpRename</a>",1,["opendal::raw::rps::RpRename"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpCreateDir.html\" title=\"struct opendal::raw::OpCreateDir\">OpCreateDir</a>",1,["opendal::raw::ops::OpCreateDir"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpDelete.html\" title=\"struct opendal::raw::OpDelete\">OpDelete</a>",1,["opendal::raw::ops::OpDelete"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpList.html\" title=\"struct opendal::raw::OpList\">OpList</a>",1,["opendal::raw::ops::OpList"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpPresign.html\" title=\"struct opendal::raw::OpPresign\">OpPresign</a>",1,["opendal::raw::ops::OpPresign"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/enum.PresignOperation.html\" title=\"enum opendal::raw::PresignOperation\">PresignOperation</a>",1,["opendal::raw::ops::PresignOperation"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpBatch.html\" title=\"struct opendal::raw::OpBatch\">OpBatch</a>",1,["opendal::raw::ops::OpBatch"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/enum.BatchOperation.html\" title=\"enum opendal::raw::BatchOperation\">BatchOperation</a>",1,["opendal::raw::ops::BatchOperation"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpRead.html\" title=\"struct opendal::raw::OpRead\">OpRead</a>",1,["opendal::raw::ops::OpRead"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpStat.html\" title=\"struct opendal::raw::OpStat\">OpStat</a>",1,["opendal::raw::ops::OpStat"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpWrite.html\" title=\"struct opendal::raw::OpWrite\">OpWrite</a>",1,["opendal::raw::ops::OpWrite"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpCopy.html\" title=\"struct opendal::raw::OpCopy\">OpCopy</a>",1,["opendal::raw::ops::OpCopy"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.OpRename.html\" title=\"struct opendal::raw::OpRename\">OpRename</a>",1,["opendal::raw::ops::OpRename"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.HttpClient.html\" title=\"struct opendal::raw::HttpClient\">HttpClient</a>",1,["opendal::raw::http_util::client::HttpClient"]],["impl !Freeze for <a class=\"enum\" href=\"opendal/raw/enum.AsyncBody.html\" title=\"enum opendal::raw::AsyncBody\">AsyncBody</a>",1,["opendal::raw::http_util::body::AsyncBody"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/struct.IncomingAsyncBody.html\" title=\"struct opendal::raw::IncomingAsyncBody\">IncomingAsyncBody</a>",1,["opendal::raw::http_util::body::IncomingAsyncBody"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.BytesRange.html\" title=\"struct opendal::raw::BytesRange\">BytesRange</a>",1,["opendal::raw::http_util::bytes_range::BytesRange"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/struct.BytesContentRange.html\" title=\"struct opendal::raw::BytesContentRange\">BytesContentRange</a>",1,["opendal::raw::http_util::bytes_content_range::BytesContentRange"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/struct.Multipart.html\" title=\"struct opendal::raw::Multipart\">Multipart</a>&lt;T&gt;",1,["opendal::raw::http_util::multipart::Multipart"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/struct.FormDataPart.html\" title=\"struct opendal::raw::FormDataPart\">FormDataPart</a>",1,["opendal::raw::http_util::multipart::FormDataPart"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/struct.MixedPart.html\" title=\"struct opendal::raw::MixedPart\">MixedPart</a>",1,["opendal::raw::http_util::multipart::MixedPart"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/adapters/kv/struct.Metadata.html\" title=\"struct opendal::raw::adapters::kv::Metadata\">Metadata</a>",1,["opendal::raw::adapters::kv::api::Metadata"]],["impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/adapters/kv/struct.Backend.html\" title=\"struct opendal::raw::adapters::kv::Backend\">Backend</a>&lt;S&gt;",1,["opendal::raw::adapters::kv::backend::Backend"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/adapters/typed_kv/struct.Value.html\" title=\"struct opendal::raw::adapters::typed_kv::Value\">Value</a>",1,["opendal::raw::adapters::typed_kv::api::Value"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/adapters/typed_kv/struct.Capability.html\" title=\"struct opendal::raw::adapters::typed_kv::Capability\">Capability</a>",1,["opendal::raw::adapters::typed_kv::api::Capability"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/adapters/typed_kv/struct.Info.html\" title=\"struct opendal::raw::adapters::typed_kv::Info\">Info</a>",1,["opendal::raw::adapters::typed_kv::api::Info"]],["impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/adapters/typed_kv/struct.Backend.html\" title=\"struct opendal::raw::adapters::typed_kv::Backend\">Backend</a>&lt;S&gt;",1,["opendal::raw::adapters::typed_kv::backend::Backend"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/oio/enum.ReadOperation.html\" title=\"enum opendal::raw::oio::ReadOperation\">ReadOperation</a>",1,["opendal::raw::oio::read::api::ReadOperation"]],["impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.StreamableReader.html\" title=\"struct opendal::raw::oio::StreamableReader\">StreamableReader</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: Freeze,</span>",1,["opendal::raw::oio::read::into_streamable_read::StreamableReader"]],["impl&lt;A, R&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.ByRangeSeekableReader.html\" title=\"struct opendal::raw::oio::ByRangeSeekableReader\">ByRangeSeekableReader</a>&lt;A, R&gt;<span class=\"where fmt-newline\">where\n    R: Freeze,</span>",1,["opendal::raw::oio::read::into_seekable_read_by_range::ByRangeSeekableReader"]],["impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.FromFileReader.html\" title=\"struct opendal::raw::oio::FromFileReader\">FromFileReader</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: Freeze,</span>",1,["opendal::raw::oio::read::into_read_from_file::FromFileReader"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/oio/enum.WriteOperation.html\" title=\"enum opendal::raw::oio::WriteOperation\">WriteOperation</a>",1,["opendal::raw::oio::write::api::WriteOperation"]],["impl&lt;ONE, TWO&gt; Freeze for <a class=\"enum\" href=\"opendal/raw/oio/enum.TwoWaysWriter.html\" title=\"enum opendal::raw::oio::TwoWaysWriter\">TwoWaysWriter</a>&lt;ONE, TWO&gt;<span class=\"where fmt-newline\">where\n    ONE: Freeze,\n    TWO: Freeze,</span>",1,["opendal::raw::oio::write::compose_write::TwoWaysWriter"]],["impl&lt;ONE, TWO, THREE&gt; Freeze for <a class=\"enum\" href=\"opendal/raw/oio/enum.ThreeWaysWriter.html\" title=\"enum opendal::raw::oio::ThreeWaysWriter\">ThreeWaysWriter</a>&lt;ONE, TWO, THREE&gt;<span class=\"where fmt-newline\">where\n    ONE: Freeze,\n    THREE: Freeze,\n    TWO: Freeze,</span>",1,["opendal::raw::oio::write::compose_write::ThreeWaysWriter"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.MultipartUploadPart.html\" title=\"struct opendal::raw::oio::MultipartUploadPart\">MultipartUploadPart</a>",1,["opendal::raw::oio::write::multipart_upload_write::MultipartUploadPart"]],["impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.MultipartUploadWriter.html\" title=\"struct opendal::raw::oio::MultipartUploadWriter\">MultipartUploadWriter</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: Freeze,</span>",1,["opendal::raw::oio::write::multipart_upload_write::MultipartUploadWriter"]],["impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.AppendObjectWriter.html\" title=\"struct opendal::raw::oio::AppendObjectWriter\">AppendObjectWriter</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: Freeze,</span>",1,["opendal::raw::oio::write::append_object_write::AppendObjectWriter"]],["impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.OneShotWriter.html\" title=\"struct opendal::raw::oio::OneShotWriter\">OneShotWriter</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: Freeze,</span>",1,["opendal::raw::oio::write::one_shot_write::OneShotWriter"]],["impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.AtLeastBufWriter.html\" title=\"struct opendal::raw::oio::AtLeastBufWriter\">AtLeastBufWriter</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: Freeze,</span>",1,["opendal::raw::oio::write::at_least_buf_write::AtLeastBufWriter"]],["impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.ExactBufWriter.html\" title=\"struct opendal::raw::oio::ExactBufWriter\">ExactBufWriter</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: Freeze,</span>",1,["opendal::raw::oio::write::exact_buf_write::ExactBufWriter"]],["impl Freeze for <a class=\"enum\" href=\"opendal/raw/oio/enum.PageOperation.html\" title=\"enum opendal::raw::oio::PageOperation\">PageOperation</a>",1,["opendal::raw::oio::page::api::PageOperation"]],["impl&lt;A, P&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.FlatPager.html\" title=\"struct opendal::raw::oio::FlatPager\">FlatPager</a>&lt;A, P&gt;<span class=\"where fmt-newline\">where\n    A: Freeze,</span>",1,["opendal::raw::oio::page::into_flat_page::FlatPager"]],["impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.HierarchyPager.html\" title=\"struct opendal::raw::oio::HierarchyPager\">HierarchyPager</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Freeze,</span>",1,["opendal::raw::oio::page::into_hierarchy_pager::HierarchyPager"]],["impl !Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.Cursor.html\" title=\"struct opendal::raw::oio::Cursor\">Cursor</a>",1,["opendal::raw::oio::cursor::Cursor"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.ChunkedCursor.html\" title=\"struct opendal::raw::oio::ChunkedCursor\">ChunkedCursor</a>",1,["opendal::raw::oio::cursor::ChunkedCursor"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.VectorCursor.html\" title=\"struct opendal::raw::oio::VectorCursor\">VectorCursor</a>",1,["opendal::raw::oio::cursor::VectorCursor"]],["impl Freeze for <a class=\"struct\" href=\"opendal/raw/oio/struct.Entry.html\" title=\"struct opendal::raw::oio::Entry\">Entry</a>",1,["opendal::raw::oio::entry::Entry"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Azblob.html\" title=\"struct opendal::services::Azblob\">AzblobBuilder</a>",1,["opendal::services::azblob::backend::AzblobBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Azdfs.html\" title=\"struct opendal::services::Azdfs\">AzdfsBuilder</a>",1,["opendal::services::azdfs::backend::AzdfsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Cos.html\" title=\"struct opendal::services::Cos\">CosBuilder</a>",1,["opendal::services::cos::backend::CosBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Dashmap.html\" title=\"struct opendal::services::Dashmap\">DashmapBuilder</a>",1,["opendal::services::dashmap::backend::DashmapBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Etcd.html\" title=\"struct opendal::services::Etcd\">EtcdBuilder</a>",1,["opendal::services::etcd::backend::EtcdBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Fs.html\" title=\"struct opendal::services::Fs\">FsBuilder</a>",1,["opendal::services::fs::backend::FsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Ftp.html\" title=\"struct opendal::services::Ftp\">FtpBuilder</a>",1,["opendal::services::ftp::backend::FtpBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Gcs.html\" title=\"struct opendal::services::Gcs\">GcsBuilder</a>",1,["opendal::services::gcs::backend::GcsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Ghac.html\" title=\"struct opendal::services::Ghac\">GhacBuilder</a>",1,["opendal::services::ghac::backend::GhacBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Hdfs.html\" title=\"struct opendal::services::Hdfs\">HdfsBuilder</a>",1,["opendal::services::hdfs::backend::HdfsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Http.html\" title=\"struct opendal::services::Http\">HttpBuilder</a>",1,["opendal::services::http::backend::HttpBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Ipfs.html\" title=\"struct opendal::services::Ipfs\">IpfsBuilder</a>",1,["opendal::services::ipfs::backend::IpfsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Ipmfs.html\" title=\"struct opendal::services::Ipmfs\">IpmfsBuilder</a>",1,["opendal::services::ipmfs::builder::IpmfsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Memcached.html\" title=\"struct opendal::services::Memcached\">MemcachedBuilder</a>",1,["opendal::services::memcached::backend::MemcachedBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Memory.html\" title=\"struct opendal::services::Memory\">MemoryBuilder</a>",1,["opendal::services::memory::backend::MemoryBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.MiniMoka.html\" title=\"struct opendal::services::MiniMoka\">MiniMokaBuilder</a>",1,["opendal::services::mini_moka::backend::MiniMokaBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Moka.html\" title=\"struct opendal::services::Moka\">MokaBuilder</a>",1,["opendal::services::moka::backend::MokaBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Obs.html\" title=\"struct opendal::services::Obs\">ObsBuilder</a>",1,["opendal::services::obs::backend::ObsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Oss.html\" title=\"struct opendal::services::Oss\">OssBuilder</a>",1,["opendal::services::oss::backend::OssBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Cacache.html\" title=\"struct opendal::services::Cacache\">CacacheBuilder</a>",1,["opendal::services::cacache::backend::CacacheBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Persy.html\" title=\"struct opendal::services::Persy\">PersyBuilder</a>",1,["opendal::services::persy::backend::PersyBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Redis.html\" title=\"struct opendal::services::Redis\">RedisBuilder</a>",1,["opendal::services::redis::backend::RedisBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Rocksdb.html\" title=\"struct opendal::services::Rocksdb\">RocksdbBuilder</a>",1,["opendal::services::rocksdb::backend::RocksdbBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.S3.html\" title=\"struct opendal::services::S3\">S3Builder</a>",1,["opendal::services::s3::backend::S3Builder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Sftp.html\" title=\"struct opendal::services::Sftp\">SftpBuilder</a>",1,["opendal::services::sftp::backend::SftpBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Sled.html\" title=\"struct opendal::services::Sled\">SledBuilder</a>",1,["opendal::services::sled::backend::SledBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Supabase.html\" title=\"struct opendal::services::Supabase\">SupabaseBuilder</a>",1,["opendal::services::supabase::backend::SupabaseBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Wasabi.html\" title=\"struct opendal::services::Wasabi\">WasabiBuilder</a>",1,["opendal::services::wasabi::backend::WasabiBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Webdav.html\" title=\"struct opendal::services::Webdav\">WebdavBuilder</a>",1,["opendal::services::webdav::backend::WebdavBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Webhdfs.html\" title=\"struct opendal::services::Webhdfs\">WebhdfsBuilder</a>",1,["opendal::services::webhdfs::backend::WebhdfsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Onedrive.html\" title=\"struct opendal::services::Onedrive\">OnedriveBuilder</a>",1,["opendal::services::onedrive::builder::OnedriveBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Gdrive.html\" title=\"struct opendal::services::Gdrive\">GdriveBuilder</a>",1,["opendal::services::gdrive::builder::GdriveBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Dropbox.html\" title=\"struct opendal::services::Dropbox\">DropboxBuilder</a>",1,["opendal::services::dropbox::builder::DropboxBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.VercelArtifacts.html\" title=\"struct opendal::services::VercelArtifacts\">VercelArtifactsBuilder</a>",1,["opendal::services::vercel_artifacts::builder::VercelArtifactsBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Redb.html\" title=\"struct opendal::services::Redb\">RedbBuilder</a>",1,["opendal::services::redb::backend::RedbBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Tikv.html\" title=\"struct opendal::services::Tikv\">TikvBuilder</a>",1,["opendal::services::tikv::backend::TikvBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Foundationdb.html\" title=\"struct opendal::services::Foundationdb\">FoundationdbBuilder</a>",1,["opendal::services::foundationdb::backend::FoundationdbBuilder"]],["impl Freeze for <a class=\"struct\" href=\"opendal/services/struct.Postgresql.html\" title=\"struct opendal::services::Postgresql\">PostgresqlBuilder</a>",1,["opendal::services::postgresql::backend::PostgresqlBuilder"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
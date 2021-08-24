export interface Result {
	responseContext: any;
	trackingParams: string;
	contents: any;
}

export interface NextContinuationData {
	continuation: string;
	clickTrackingParams: string;
}
